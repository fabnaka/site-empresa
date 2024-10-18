import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Empresa = {
  __typename?: 'Empresa';
  ativo?: Maybe<Scalars['String']['output']>;
  cnpj: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  endereco?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  nome?: Maybe<Scalars['String']['output']>;
  telefone?: Maybe<Scalars['String']['output']>;
};

export type EmpresaDataTable = {
  __typename?: 'EmpresaDataTable';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Empresa>>;
};

export type EmpresaFilterInput = {
  descricao?: InputMaybe<PrimeFilterItemString>;
  id?: InputMaybe<PrimeFilterItemInt>;
};

export type EmpresaInput = {
  ativo?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  endereco?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nome?: InputMaybe<Scalars['String']['input']>;
  telefone?: InputMaybe<Scalars['String']['input']>;
};

export type EmpresaListInput = {
  filters?: InputMaybe<EmpresaFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  globalFilter?: InputMaybe<Scalars['String']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  criarAlterarEmpresa?: Maybe<Empresa>;
  criarAlterarUsuario?: Maybe<Usuario>;
};


export type MutationCriarAlterarEmpresaArgs = {
  data: EmpresaInput;
};


export type MutationCriarAlterarUsuarioArgs = {
  data: UsuarioInput;
};

export type PrimeFilterItemInt = {
  matchMode?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type PrimeFilterItemString = {
  matchMode?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  buscarEmpresaPorId?: Maybe<Empresa>;
  buscarUsuarioPorId?: Maybe<Usuario>;
  filtrarEmpresa?: Maybe<EmpresaDataTable>;
  filtrarUsuario?: Maybe<UsuarioDataTable>;
  listarEmpresa?: Maybe<Array<Empresa>>;
  listarUsuario?: Maybe<Array<Usuario>>;
  login?: Maybe<Usuario>;
  usuarioLogado?: Maybe<Usuario>;
};


export type QueryBuscarEmpresaPorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBuscarUsuarioPorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFiltrarEmpresaArgs = {
  filter: EmpresaListInput;
};


export type QueryFiltrarUsuarioArgs = {
  filter: UsuarioListInput;
};


export type QueryLoginArgs = {
  data: UsuarioLoginInput;
};

export type Usuario = {
  __typename?: 'Usuario';
  ativo?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  nome?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  usuario?: Maybe<Scalars['String']['output']>;
};

export type UsuarioDataTable = {
  __typename?: 'UsuarioDataTable';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Usuario>>;
};

export type UsuarioFilterInput = {
  ativo?: InputMaybe<PrimeFilterItemString>;
  id?: InputMaybe<PrimeFilterItemInt>;
  nome?: InputMaybe<PrimeFilterItemString>;
  usuario?: InputMaybe<PrimeFilterItemString>;
};

export type UsuarioInput = {
  ativo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nome?: InputMaybe<Scalars['String']['input']>;
  senha?: InputMaybe<Scalars['String']['input']>;
  usuario?: InputMaybe<Scalars['String']['input']>;
};

export type UsuarioListInput = {
  filters?: InputMaybe<UsuarioFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  globalFilter?: InputMaybe<Scalars['String']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type UsuarioLoginInput = {
  senha: Scalars['String']['input'];
  usuario: Scalars['String']['input'];
};

export type CriarAlterarEmpresaMutationVariables = Exact<{
  data: EmpresaInput;
}>;


export type CriarAlterarEmpresaMutation = { __typename?: 'Mutation', criarAlterarEmpresa?: { __typename?: 'Empresa', id: number, nome?: string | null, cnpj: string, endereco?: string | null, telefone?: string | null, email?: string | null } | null };

export type BuscarEmpresaPorIdQueryVariables = Exact<{
  buscarEmpresaPorIdId: Scalars['Int']['input'];
}>;


export type BuscarEmpresaPorIdQuery = { __typename?: 'Query', buscarEmpresaPorId?: { __typename?: 'Empresa', id: number, nome?: string | null, cnpj: string, endereco?: string | null, telefone?: string | null, email?: string | null } | null };

export type FiltrarEmpresaQueryVariables = Exact<{
  filter: EmpresaListInput;
}>;


export type FiltrarEmpresaQuery = { __typename?: 'Query', filtrarEmpresa?: { __typename?: 'EmpresaDataTable', count?: number | null, rows?: Array<{ __typename?: 'Empresa', id: number, nome?: string | null, cnpj: string, endereco?: string | null, telefone?: string | null, email?: string | null }> | null } | null };

export type ListarEmpresaQueryVariables = Exact<{ [key: string]: never; }>;


export type ListarEmpresaQuery = { __typename?: 'Query', listarEmpresa?: Array<{ __typename?: 'Empresa', id: number, nome?: string | null, cnpj: string, endereco?: string | null, telefone?: string | null, email?: string | null }> | null };

export type LoginQueryVariables = Exact<{
  data: UsuarioLoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Usuario', token?: string | null } | null };

export type FiltrarUsuarioQueryVariables = Exact<{
  filter: UsuarioListInput;
}>;


export type FiltrarUsuarioQuery = { __typename?: 'Query', filtrarUsuario?: { __typename?: 'UsuarioDataTable', count?: number | null, rows?: Array<{ __typename?: 'Usuario', id: number, usuario?: string | null, nome?: string | null, ativo?: string | null }> | null } | null };

export type CriarAlterarUsuarioMutationVariables = Exact<{
  data: UsuarioInput;
}>;


export type CriarAlterarUsuarioMutation = { __typename?: 'Mutation', criarAlterarUsuario?: { __typename?: 'Usuario', id: number, usuario?: string | null, nome?: string | null, senha?: string | null, ativo?: string | null } | null };

export type BuscarUsuarioPorIdQueryVariables = Exact<{
  buscarUsuarioPorIdId: Scalars['Int']['input'];
}>;


export type BuscarUsuarioPorIdQuery = { __typename?: 'Query', buscarUsuarioPorId?: { __typename?: 'Usuario', id: number, usuario?: string | null, nome?: string | null, senha?: string | null, ativo?: string | null } | null };

export type UsuarioLogadoQueryVariables = Exact<{ [key: string]: never; }>;


export type UsuarioLogadoQuery = { __typename?: 'Query', usuarioLogado?: { __typename?: 'Usuario', id: number, nome?: string | null, usuario?: string | null } | null };

export const CriarAlterarEmpresaDocument = gql`
    mutation CriarAlterarEmpresa($data: EmpresaInput!) {
  criarAlterarEmpresa(data: $data) {
    id
    nome
    cnpj
    endereco
    telefone
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CriarAlterarEmpresaGQL extends Apollo.Mutation<CriarAlterarEmpresaMutation, CriarAlterarEmpresaMutationVariables> {
    override document = CriarAlterarEmpresaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarEmpresaPorIdDocument = gql`
    query BuscarEmpresaPorId($buscarEmpresaPorIdId: Int!) {
  buscarEmpresaPorId(id: $buscarEmpresaPorIdId) {
    id
    nome
    cnpj
    endereco
    telefone
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarEmpresaPorIdGQL extends Apollo.Query<BuscarEmpresaPorIdQuery, BuscarEmpresaPorIdQueryVariables> {
    override document = BuscarEmpresaPorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FiltrarEmpresaDocument = gql`
    query FiltrarEmpresa($filter: EmpresaListInput!) {
  filtrarEmpresa(filter: $filter) {
    rows {
      id
      nome
      cnpj
      endereco
      telefone
      email
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FiltrarEmpresaGQL extends Apollo.Query<FiltrarEmpresaQuery, FiltrarEmpresaQueryVariables> {
    override document = FiltrarEmpresaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListarEmpresaDocument = gql`
    query ListarEmpresa {
  listarEmpresa {
    id
    nome
    cnpj
    endereco
    telefone
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListarEmpresaGQL extends Apollo.Query<ListarEmpresaQuery, ListarEmpresaQueryVariables> {
    override document = ListarEmpresaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    query login($data: UsuarioLoginInput!) {
  login(data: $data) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FiltrarUsuarioDocument = gql`
    query filtrarUsuario($filter: UsuarioListInput!) {
  filtrarUsuario(filter: $filter) {
    count
    rows {
      id
      usuario
      nome
      ativo
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FiltrarUsuarioGQL extends Apollo.Query<FiltrarUsuarioQuery, FiltrarUsuarioQueryVariables> {
    override document = FiltrarUsuarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CriarAlterarUsuarioDocument = gql`
    mutation criarAlterarUsuario($data: UsuarioInput!) {
  criarAlterarUsuario(data: $data) {
    id
    usuario
    nome
    senha
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CriarAlterarUsuarioGQL extends Apollo.Mutation<CriarAlterarUsuarioMutation, CriarAlterarUsuarioMutationVariables> {
    override document = CriarAlterarUsuarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarUsuarioPorIdDocument = gql`
    query BuscarUsuarioPorId($buscarUsuarioPorIdId: Int!) {
  buscarUsuarioPorId(id: $buscarUsuarioPorIdId) {
    id
    usuario
    nome
    senha
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarUsuarioPorIdGQL extends Apollo.Query<BuscarUsuarioPorIdQuery, BuscarUsuarioPorIdQueryVariables> {
    override document = BuscarUsuarioPorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsuarioLogadoDocument = gql`
    query usuarioLogado {
  usuarioLogado {
    id
    nome
    usuario
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsuarioLogadoGQL extends Apollo.Query<UsuarioLogadoQuery, UsuarioLogadoQueryVariables> {
    override document = UsuarioLogadoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }