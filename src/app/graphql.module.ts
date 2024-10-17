import { HttpLink } from 'apollo-angular/http'
import { AuthService } from './services/auth/auth.service'
import { ApolloClientOptions, ApolloLink, InMemoryCache, split } from '@apollo/client/core'
import { environment } from './../environment'
import { WebSocketLink } from '@apollo/client/link/ws'
import { onError } from '@apollo/client/link/error'
//import { HttpHeaders } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { getMainDefinition } from '@apollo/client/utilities'
import { NgModule } from '@angular/core'
import { APOLLO_OPTIONS } from 'apollo-angular'


export function createApollo ( httpLink:HttpLink, authService: AuthService ): ApolloClientOptions <any> {

    const http = httpLink.create({
        uri: environment.graphQLUri
    })

    // const ws = new WebSocketLink ({
    //     uri: environment.subscriptionsUri,
    //     options: {
    //         reconnect: false,
    //         connectionParams: () => ({
    //             authorization: authService.getSession() ? `Bearer ${authService.getSession()}` : undefined
    //         })
    //     }
    // });

    const error = onError(({ graphQLErrors, networkError, response, operation }) => {
        
        if(graphQLErrors){
            let unauthenticated: number = graphQLErrors.findIndex(({ extensions }) => extensions['code'] === "UNAUTHENTICATED");

            if (unauthenticated !== -1) {
                authService.removeSession();
              };
        
              graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                  `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
              );        
        };

        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
        };
    });

    const middleware = new ApolloLink((operation, forward) => {
        const token = authService.getSession();

        if(token){
            operation.setContext({
                headers: new HttpHeaders().set(
                    `Authorization`,
                    `Bearer ${token}`
                )
            });
        }
        return forward(operation);
    })

    const link = ApolloLink.from([
        error,
        middleware,
        http
        // split(
        //     ({ query }) => {
        //         const definition = getMainDefinition(query);
        //         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        //     },
        //     ws,
        //     http
        // )
    ]);

    return {
        link: link,
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: "no-cache"
            }
        }
    };    
}
@NgModule({
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [
                HttpLink,
                AuthService
            ]
        }
    ]
})
export class GraphQLModule {}