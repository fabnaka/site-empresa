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

export type GrupoParticipante = {
  __typename?: 'GrupoParticipante';
  ativo?: Maybe<Scalars['String']['output']>;
  azure_group_id: Scalars['String']['output'];
  descricao?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
};

export type GrupoParticipanteDataTable = {
  __typename?: 'GrupoParticipanteDataTable';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<GrupoParticipante>>;
};

export type GrupoParticipanteFilterInput = {
  descricao?: InputMaybe<PrimeFilterItemString>;
  id?: InputMaybe<PrimeFilterItemInt>;
};

export type GrupoParticipanteInput = {
  ativo?: InputMaybe<Scalars['String']['input']>;
  azure_group_id?: InputMaybe<Scalars['Int']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type GrupoParticipanteListInput = {
  filters?: InputMaybe<GrupoParticipanteFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  globalFilter?: InputMaybe<Scalars['String']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  autenticarParticipanteFacial?: Maybe<Array<ReuniaoParticipante>>;
  azureFaceIdentify?: Maybe<ParticipanteAutenticado>;
  criarAlterarGrupoParticipante?: Maybe<GrupoParticipante>;
  criarAlterarParticipante?: Maybe<Participante>;
  criarAlterarReuniao?: Maybe<Reuniao>;
  criarAlterarReuniaoParticipante?: Maybe<ReuniaoParticipante>;
  criarAlterarUsuario?: Maybe<Usuario>;
};


export type MutationAutenticarParticipanteFacialArgs = {
  participante_id: Scalars['Int']['input'];
  reunioes_ids: Array<Scalars['Float']['input']>;
};


export type MutationAzureFaceIdentifyArgs = {
  data: ReuniaoReconhecimentoInput;
};


export type MutationCriarAlterarGrupoParticipanteArgs = {
  data: GrupoParticipanteInput;
};


export type MutationCriarAlterarParticipanteArgs = {
  data: ParticipanteInput;
};


export type MutationCriarAlterarReuniaoArgs = {
  data: ReuniaoInput;
};


export type MutationCriarAlterarReuniaoParticipanteArgs = {
  data: ReuniaoParticipanteInput;
};


export type MutationCriarAlterarUsuarioArgs = {
  data: UsuarioInput;
};

export type Participante = {
  __typename?: 'Participante';
  ativo?: Maybe<Scalars['String']['output']>;
  cargo?: Maybe<Scalars['String']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  data_cadastro?: Maybe<Scalars['String']['output']>;
  dedo_cadastrado?: Maybe<Scalars['String']['output']>;
  digital?: Maybe<Scalars['String']['output']>;
  entidade?: Maybe<Scalars['String']['output']>;
  foto?: Maybe<Scalars['String']['output']>;
  grupo?: Maybe<Scalars['String']['output']>;
  grupo_participante_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  nome?: Maybe<Scalars['String']['output']>;
  participante_foto_comparacao?: Maybe<Array<ParticipanteFotoComparacao>>;
  participante_id_azure?: Maybe<Scalars['String']['output']>;
  posicao_relatorio?: Maybe<Scalars['Float']['output']>;
  reuniao_participante?: Maybe<Array<ReuniaoParticipante>>;
};

export type ParticipanteAutenticado = {
  __typename?: 'ParticipanteAutenticado';
  autenticado?: Maybe<Scalars['String']['output']>;
  cargo?: Maybe<Scalars['String']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  foto?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  participante_id_azure?: Maybe<Scalars['String']['output']>;
};

export type ParticipanteDataTable = {
  __typename?: 'ParticipanteDataTable';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Participante>>;
};

export type ParticipanteFilterInput = {
  ativo?: InputMaybe<PrimeFilterItemString>;
  cpf?: InputMaybe<PrimeFilterItemString>;
  grupo?: InputMaybe<PrimeFilterItemString>;
  grupo_participante_id?: InputMaybe<PrimeFilterItemInt>;
  id?: InputMaybe<PrimeFilterItemInt>;
  nome?: InputMaybe<PrimeFilterItemString>;
};

export type ParticipanteFotoComparacao = {
  __typename?: 'ParticipanteFotoComparacao';
  foto?: Maybe<Scalars['String']['output']>;
  foto_id_azure?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  participante?: Maybe<Participante>;
  participante_id?: Maybe<Scalars['Int']['output']>;
};

export type ParticipanteInput = {
  ativo?: InputMaybe<Scalars['String']['input']>;
  azure_group_id?: InputMaybe<Scalars['String']['input']>;
  cargo?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  dedo_cadastrado?: InputMaybe<Scalars['String']['input']>;
  digital?: InputMaybe<Scalars['String']['input']>;
  entidade?: InputMaybe<Scalars['String']['input']>;
  foto?: InputMaybe<Scalars['String']['input']>;
  grupo?: InputMaybe<Scalars['String']['input']>;
  grupo_participante_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nome?: InputMaybe<Scalars['String']['input']>;
  participante_foto_comparacao?: InputMaybe<Array<Scalars['String']['input']>>;
  participante_id_azure?: InputMaybe<Scalars['String']['input']>;
  posicao_relatorio?: InputMaybe<Scalars['Float']['input']>;
};

export type ParticipanteListInput = {
  filters?: InputMaybe<ParticipanteFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  globalFilter?: InputMaybe<Scalars['String']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type PrimeFilterItemInt = {
  matchMode?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type PrimeFilterItemString = {
  matchMode?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type QtdeParticipanteAutenticados = {
  __typename?: 'QtdeParticipanteAutenticados';
  qtde?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  buscarGrupoParticipantePorId?: Maybe<GrupoParticipante>;
  buscarParticipantePorId?: Maybe<Participante>;
  buscarParticipanteViaDigital?: Maybe<Participante>;
  buscarParticipantesFotosComparacao?: Maybe<Array<Participante>>;
  buscarQtdeReuniaoPorId?: Maybe<QtdeParticipanteAutenticados>;
  buscarReuniaoParticipantePorId?: Maybe<ReuniaoParticipante>;
  buscarReuniaoPorId?: Maybe<Reuniao>;
  buscarUsuarioPorId?: Maybe<Usuario>;
  filtrarGrupoParticipante?: Maybe<GrupoParticipanteDataTable>;
  filtrarParticipante?: Maybe<ParticipanteDataTable>;
  filtrarReuniao?: Maybe<ReuniaoDataTable>;
  filtrarReuniaoParticipante?: Maybe<ReuniaoParticipanteDataTable>;
  filtrarUsuario?: Maybe<UsuarioDataTable>;
  listarGrupoParticipante?: Maybe<Array<GrupoParticipante>>;
  listarParticipante?: Maybe<Array<Participante>>;
  listarReuniao?: Maybe<Array<Reuniao>>;
  listarReuniaoParticipante?: Maybe<Array<ReuniaoParticipante>>;
  listarUsuario?: Maybe<Array<Usuario>>;
  login?: Maybe<Usuario>;
  usuarioLogado?: Maybe<Usuario>;
};


export type QueryBuscarGrupoParticipantePorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBuscarParticipantePorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBuscarParticipanteViaDigitalArgs = {
  digital: Scalars['String']['input'];
  reunioes_ids: Array<Scalars['Float']['input']>;
};


export type QueryBuscarParticipantesFotosComparacaoArgs = {
  reunioes_ids: Array<Scalars['Float']['input']>;
};


export type QueryBuscarQtdeReuniaoPorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBuscarReuniaoParticipantePorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBuscarReuniaoPorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBuscarUsuarioPorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFiltrarGrupoParticipanteArgs = {
  filter: GrupoParticipanteListInput;
};


export type QueryFiltrarParticipanteArgs = {
  filter: ParticipanteListInput;
};


export type QueryFiltrarReuniaoArgs = {
  filter: ReuniaoListInput;
};


export type QueryFiltrarReuniaoParticipanteArgs = {
  filter: ReuniaoParticipanteListInput;
};


export type QueryFiltrarUsuarioArgs = {
  filter: UsuarioListInput;
};


export type QueryLoginArgs = {
  data: UsuarioLoginInput;
};

export type Reuniao = {
  __typename?: 'Reuniao';
  data_reuniao?: Maybe<Scalars['String']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  grupo_participante?: Maybe<GrupoParticipante>;
  grupo_participante_id?: Maybe<Scalars['Int']['output']>;
  horario?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  local?: Maybe<Scalars['String']['output']>;
  reuniao_participante?: Maybe<Array<ReuniaoParticipante>>;
};

export type ReuniaoDataTable = {
  __typename?: 'ReuniaoDataTable';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Reuniao>>;
};

export type ReuniaoFilterInput = {
  data_reuniao?: InputMaybe<PrimeFilterItemString>;
  descricao?: InputMaybe<PrimeFilterItemString>;
  id?: InputMaybe<PrimeFilterItemInt>;
};

export type ReuniaoInput = {
  convidados_id?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_reuniao?: InputMaybe<Scalars['String']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  grupo_participante_id?: InputMaybe<Scalars['Int']['input']>;
  horario?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  local?: InputMaybe<Scalars['String']['input']>;
  participantes_id?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ReuniaoListInput = {
  filters?: InputMaybe<ReuniaoFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  globalFilter?: InputMaybe<Scalars['String']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type ReuniaoParticipante = {
  __typename?: 'ReuniaoParticipante';
  horario_presenca?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  participante?: Maybe<Participante>;
  participante_grupo?: Maybe<Scalars['String']['output']>;
  participante_id?: Maybe<Scalars['Int']['output']>;
  presente?: Maybe<Scalars['String']['output']>;
  reuniao?: Maybe<Reuniao>;
  reuniao_id?: Maybe<Scalars['Int']['output']>;
};

export type ReuniaoParticipanteDataTable = {
  __typename?: 'ReuniaoParticipanteDataTable';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<ReuniaoParticipante>>;
};

export type ReuniaoParticipanteFilterInput = {
  id?: InputMaybe<PrimeFilterItemInt>;
  participante_id?: InputMaybe<PrimeFilterItemInt>;
  reuniao_id?: InputMaybe<PrimeFilterItemInt>;
};

export type ReuniaoParticipanteInput = {
  horario_presenca?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  participante_id?: InputMaybe<Scalars['Int']['input']>;
  presente?: InputMaybe<Scalars['String']['input']>;
  reuniao_id?: InputMaybe<Scalars['Int']['input']>;
};

export type ReuniaoParticipanteListInput = {
  filters?: InputMaybe<ReuniaoParticipanteFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  globalFilter?: InputMaybe<Scalars['String']['input']>;
  rows?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type ReuniaoReconhecimentoInput = {
  azure_group_id?: InputMaybe<Scalars['String']['input']>;
  foto?: InputMaybe<Scalars['String']['input']>;
  reunioes_id?: InputMaybe<Array<Scalars['Int']['input']>>;
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

export type CriarAlterarGrupoParticipanteMutationVariables = Exact<{
  data: GrupoParticipanteInput;
}>;


export type CriarAlterarGrupoParticipanteMutation = { __typename?: 'Mutation', criarAlterarGrupoParticipante?: { __typename?: 'GrupoParticipante', id: number, descricao?: string | null, azure_group_id: string, ativo?: string | null } | null };

export type BuscarGrupoParticipantePorIdQueryVariables = Exact<{
  buscarGrupoParticipantePorIdId: Scalars['Int']['input'];
}>;


export type BuscarGrupoParticipantePorIdQuery = { __typename?: 'Query', buscarGrupoParticipantePorId?: { __typename?: 'GrupoParticipante', id: number, descricao?: string | null, azure_group_id: string, ativo?: string | null } | null };

export type FiltrarGrupoParticipanteQueryVariables = Exact<{
  filter: GrupoParticipanteListInput;
}>;


export type FiltrarGrupoParticipanteQuery = { __typename?: 'Query', filtrarGrupoParticipante?: { __typename?: 'GrupoParticipanteDataTable', count?: number | null, rows?: Array<{ __typename?: 'GrupoParticipante', id: number, descricao?: string | null, azure_group_id: string, ativo?: string | null }> | null } | null };

export type ListarGrupoParticipanteQueryVariables = Exact<{ [key: string]: never; }>;


export type ListarGrupoParticipanteQuery = { __typename?: 'Query', listarGrupoParticipante?: Array<{ __typename?: 'GrupoParticipante', id: number, descricao?: string | null, azure_group_id: string, ativo?: string | null }> | null };

export type FiltrarParticipanteQueryVariables = Exact<{
  filter: ParticipanteListInput;
}>;


export type FiltrarParticipanteQuery = { __typename?: 'Query', filtrarParticipante?: { __typename?: 'ParticipanteDataTable', count?: number | null, rows?: Array<{ __typename?: 'Participante', id: number, nome?: string | null, cpf?: string | null, cargo?: string | null, grupo?: string | null, dedo_cadastrado?: string | null, posicao_relatorio?: number | null, ativo?: string | null }> | null } | null };

export type BuscarParticipantePorIdQueryVariables = Exact<{
  buscarParticipantePorIdId: Scalars['Int']['input'];
}>;


export type BuscarParticipantePorIdQuery = { __typename?: 'Query', buscarParticipantePorId?: { __typename?: 'Participante', id: number, nome?: string | null, cpf?: string | null, cargo?: string | null, data_cadastro?: string | null, grupo?: string | null, entidade?: string | null, digital?: string | null, foto?: string | null, ativo?: string | null, posicao_relatorio?: number | null, grupo_participante_id?: number | null, participante_id_azure?: string | null, dedo_cadastrado?: string | null, participante_foto_comparacao?: Array<{ __typename?: 'ParticipanteFotoComparacao', id: number, foto?: string | null }> | null } | null };

export type CriarAlterarParticipanteMutationVariables = Exact<{
  data: ParticipanteInput;
}>;


export type CriarAlterarParticipanteMutation = { __typename?: 'Mutation', criarAlterarParticipante?: { __typename?: 'Participante', id: number, nome?: string | null, cpf?: string | null, cargo?: string | null, data_cadastro?: string | null, grupo?: string | null, entidade?: string | null, digital?: string | null, foto?: string | null, dedo_cadastrado?: string | null, posicao_relatorio?: number | null, grupo_participante_id?: number | null, ativo?: string | null } | null };

export type BuscarParticipanteViaDigitalQueryVariables = Exact<{
  digital: Scalars['String']['input'];
  reunioes_ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
}>;


export type BuscarParticipanteViaDigitalQuery = { __typename?: 'Query', buscarParticipanteViaDigital?: { __typename?: 'Participante', id: number, nome?: string | null, cpf?: string | null, cargo?: string | null, data_cadastro?: string | null, grupo?: string | null, entidade?: string | null, digital?: string | null, foto?: string | null, dedo_cadastrado?: string | null, ativo?: string | null } | null };

export type BuscarParticipantesFotosComparacaoQueryVariables = Exact<{
  reunioes_ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
}>;


export type BuscarParticipantesFotosComparacaoQuery = { __typename?: 'Query', buscarParticipantesFotosComparacao?: Array<{ __typename?: 'Participante', id: number, nome?: string | null, cargo?: string | null, foto?: string | null, participante_foto_comparacao?: Array<{ __typename?: 'ParticipanteFotoComparacao', id: number, foto?: string | null }> | null, reuniao_participante?: Array<{ __typename?: 'ReuniaoParticipante', id: number, presente?: string | null }> | null }> | null };

export type AutenticarParticipanteFacialMutationVariables = Exact<{
  participante_id: Scalars['Int']['input'];
  reunioes_ids: Array<Scalars['Float']['input']> | Scalars['Float']['input'];
}>;


export type AutenticarParticipanteFacialMutation = { __typename?: 'Mutation', autenticarParticipanteFacial?: Array<{ __typename?: 'ReuniaoParticipante', id: number, participante_id?: number | null, reuniao_id?: number | null, presente?: string | null, horario_presenca?: string | null }> | null };

export type BuscarQtdeReuniaoPorIdQueryVariables = Exact<{
  buscarQtdeReuniaoPorIdId: Scalars['Int']['input'];
}>;


export type BuscarQtdeReuniaoPorIdQuery = { __typename?: 'Query', buscarQtdeReuniaoPorId?: { __typename?: 'QtdeParticipanteAutenticados', qtde?: number | null } | null };

export type BuscarReuniaoParticipantePorIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type BuscarReuniaoParticipantePorIdQuery = { __typename?: 'Query', buscarReuniaoParticipantePorId?: { __typename?: 'ReuniaoParticipante', id: number, reuniao_id?: number | null, participante_id?: number | null, presente?: string | null, participante_grupo?: string | null, horario_presenca?: string | null, participante?: { __typename?: 'Participante', nome?: string | null } | null } | null };

export type CriarAlterarReuniaoParticipanteMutationVariables = Exact<{
  data: ReuniaoParticipanteInput;
}>;


export type CriarAlterarReuniaoParticipanteMutation = { __typename?: 'Mutation', criarAlterarReuniaoParticipante?: { __typename?: 'ReuniaoParticipante', id: number, reuniao_id?: number | null, participante_id?: number | null, presente?: string | null, participante_grupo?: string | null, horario_presenca?: string | null } | null };

export type CriarAlterarReuniaoMutationVariables = Exact<{
  data: ReuniaoInput;
}>;


export type CriarAlterarReuniaoMutation = { __typename?: 'Mutation', criarAlterarReuniao?: { __typename?: 'Reuniao', id: number, descricao?: string | null, data_reuniao?: string | null, grupo_participante_id?: number | null, horario?: string | null } | null };

export type BuscarReuniaoPorIdQueryVariables = Exact<{
  buscarReuniaoPorIdId: Scalars['Int']['input'];
}>;


export type BuscarReuniaoPorIdQuery = { __typename?: 'Query', buscarReuniaoPorId?: { __typename?: 'Reuniao', id: number, descricao?: string | null, local?: string | null, grupo_participante_id?: number | null, data_reuniao?: string | null, horario?: string | null, reuniao_participante?: Array<{ __typename?: 'ReuniaoParticipante', id: number, reuniao_id?: number | null, participante_id?: number | null, participante_grupo?: string | null, presente?: string | null, horario_presenca?: string | null, participante?: { __typename?: 'Participante', nome?: string | null, grupo?: string | null, cargo?: string | null, posicao_relatorio?: number | null } | null }> | null } | null };

export type FiltrarReuniaoQueryVariables = Exact<{
  filter: ReuniaoListInput;
}>;


export type FiltrarReuniaoQuery = { __typename?: 'Query', filtrarReuniao?: { __typename?: 'ReuniaoDataTable', count?: number | null, rows?: Array<{ __typename?: 'Reuniao', id: number, descricao?: string | null, data_reuniao?: string | null, horario?: string | null, grupo_participante_id?: number | null, grupo_participante?: { __typename?: 'GrupoParticipante', azure_group_id: string } | null }> | null } | null };

export type AzureFaceIdentifyMutationVariables = Exact<{
  data: ReuniaoReconhecimentoInput;
}>;


export type AzureFaceIdentifyMutation = { __typename?: 'Mutation', azureFaceIdentify?: { __typename?: 'ParticipanteAutenticado', id?: number | null, nome?: string | null, cpf?: string | null, cargo?: string | null, participante_id_azure?: string | null, foto?: string | null, autenticado?: string | null } | null };

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

export const CriarAlterarGrupoParticipanteDocument = gql`
    mutation CriarAlterarGrupoParticipante($data: GrupoParticipanteInput!) {
  criarAlterarGrupoParticipante(data: $data) {
    id
    descricao
    azure_group_id
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CriarAlterarGrupoParticipanteGQL extends Apollo.Mutation<CriarAlterarGrupoParticipanteMutation, CriarAlterarGrupoParticipanteMutationVariables> {
    override document = CriarAlterarGrupoParticipanteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarGrupoParticipantePorIdDocument = gql`
    query BuscarGrupoParticipantePorId($buscarGrupoParticipantePorIdId: Int!) {
  buscarGrupoParticipantePorId(id: $buscarGrupoParticipantePorIdId) {
    id
    descricao
    azure_group_id
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarGrupoParticipantePorIdGQL extends Apollo.Query<BuscarGrupoParticipantePorIdQuery, BuscarGrupoParticipantePorIdQueryVariables> {
    override document = BuscarGrupoParticipantePorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FiltrarGrupoParticipanteDocument = gql`
    query FiltrarGrupoParticipante($filter: GrupoParticipanteListInput!) {
  filtrarGrupoParticipante(filter: $filter) {
    rows {
      id
      descricao
      azure_group_id
      ativo
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FiltrarGrupoParticipanteGQL extends Apollo.Query<FiltrarGrupoParticipanteQuery, FiltrarGrupoParticipanteQueryVariables> {
    override document = FiltrarGrupoParticipanteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListarGrupoParticipanteDocument = gql`
    query ListarGrupoParticipante {
  listarGrupoParticipante {
    id
    descricao
    azure_group_id
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListarGrupoParticipanteGQL extends Apollo.Query<ListarGrupoParticipanteQuery, ListarGrupoParticipanteQueryVariables> {
    override document = ListarGrupoParticipanteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FiltrarParticipanteDocument = gql`
    query FiltrarParticipante($filter: ParticipanteListInput!) {
  filtrarParticipante(filter: $filter) {
    rows {
      id
      nome
      cpf
      cargo
      grupo
      dedo_cadastrado
      posicao_relatorio
      ativo
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FiltrarParticipanteGQL extends Apollo.Query<FiltrarParticipanteQuery, FiltrarParticipanteQueryVariables> {
    override document = FiltrarParticipanteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarParticipantePorIdDocument = gql`
    query BuscarParticipantePorId($buscarParticipantePorIdId: Int!) {
  buscarParticipantePorId(id: $buscarParticipantePorIdId) {
    id
    nome
    cpf
    cargo
    data_cadastro
    grupo
    entidade
    digital
    foto
    ativo
    posicao_relatorio
    grupo_participante_id
    participante_id_azure
    dedo_cadastrado
    participante_foto_comparacao {
      id
      foto
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarParticipantePorIdGQL extends Apollo.Query<BuscarParticipantePorIdQuery, BuscarParticipantePorIdQueryVariables> {
    override document = BuscarParticipantePorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CriarAlterarParticipanteDocument = gql`
    mutation CriarAlterarParticipante($data: ParticipanteInput!) {
  criarAlterarParticipante(data: $data) {
    id
    nome
    cpf
    cargo
    data_cadastro
    grupo
    entidade
    digital
    foto
    dedo_cadastrado
    posicao_relatorio
    grupo_participante_id
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CriarAlterarParticipanteGQL extends Apollo.Mutation<CriarAlterarParticipanteMutation, CriarAlterarParticipanteMutationVariables> {
    override document = CriarAlterarParticipanteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarParticipanteViaDigitalDocument = gql`
    query BuscarParticipanteViaDigital($digital: String!, $reunioes_ids: [Float!]!) {
  buscarParticipanteViaDigital(digital: $digital, reunioes_ids: $reunioes_ids) {
    id
    nome
    cpf
    cargo
    data_cadastro
    grupo
    entidade
    digital
    foto
    dedo_cadastrado
    ativo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarParticipanteViaDigitalGQL extends Apollo.Query<BuscarParticipanteViaDigitalQuery, BuscarParticipanteViaDigitalQueryVariables> {
    override document = BuscarParticipanteViaDigitalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarParticipantesFotosComparacaoDocument = gql`
    query buscarParticipantesFotosComparacao($reunioes_ids: [Float!]!) {
  buscarParticipantesFotosComparacao(reunioes_ids: $reunioes_ids) {
    id
    nome
    cargo
    foto
    participante_foto_comparacao {
      id
      foto
    }
    reuniao_participante {
      id
      presente
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarParticipantesFotosComparacaoGQL extends Apollo.Query<BuscarParticipantesFotosComparacaoQuery, BuscarParticipantesFotosComparacaoQueryVariables> {
    override document = BuscarParticipantesFotosComparacaoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutenticarParticipanteFacialDocument = gql`
    mutation autenticarParticipanteFacial($participante_id: Int!, $reunioes_ids: [Float!]!) {
  autenticarParticipanteFacial(
    participante_id: $participante_id
    reunioes_ids: $reunioes_ids
  ) {
    id
    participante_id
    reuniao_id
    presente
    horario_presenca
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutenticarParticipanteFacialGQL extends Apollo.Mutation<AutenticarParticipanteFacialMutation, AutenticarParticipanteFacialMutationVariables> {
    override document = AutenticarParticipanteFacialDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarQtdeReuniaoPorIdDocument = gql`
    query BuscarQtdeReuniaoPorId($buscarQtdeReuniaoPorIdId: Int!) {
  buscarQtdeReuniaoPorId(id: $buscarQtdeReuniaoPorIdId) {
    qtde
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarQtdeReuniaoPorIdGQL extends Apollo.Query<BuscarQtdeReuniaoPorIdQuery, BuscarQtdeReuniaoPorIdQueryVariables> {
    override document = BuscarQtdeReuniaoPorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarReuniaoParticipantePorIdDocument = gql`
    query buscarReuniaoParticipantePorId($id: Int!) {
  buscarReuniaoParticipantePorId(id: $id) {
    id
    reuniao_id
    participante_id
    participante {
      nome
    }
    presente
    participante_grupo
    horario_presenca
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarReuniaoParticipantePorIdGQL extends Apollo.Query<BuscarReuniaoParticipantePorIdQuery, BuscarReuniaoParticipantePorIdQueryVariables> {
    override document = BuscarReuniaoParticipantePorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CriarAlterarReuniaoParticipanteDocument = gql`
    mutation criarAlterarReuniaoParticipante($data: ReuniaoParticipanteInput!) {
  criarAlterarReuniaoParticipante(data: $data) {
    id
    reuniao_id
    participante_id
    presente
    participante_grupo
    horario_presenca
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CriarAlterarReuniaoParticipanteGQL extends Apollo.Mutation<CriarAlterarReuniaoParticipanteMutation, CriarAlterarReuniaoParticipanteMutationVariables> {
    override document = CriarAlterarReuniaoParticipanteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CriarAlterarReuniaoDocument = gql`
    mutation CriarAlterarReuniao($data: ReuniaoInput!) {
  criarAlterarReuniao(data: $data) {
    id
    descricao
    data_reuniao
    grupo_participante_id
    horario
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CriarAlterarReuniaoGQL extends Apollo.Mutation<CriarAlterarReuniaoMutation, CriarAlterarReuniaoMutationVariables> {
    override document = CriarAlterarReuniaoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BuscarReuniaoPorIdDocument = gql`
    query BuscarReuniaoPorId($buscarReuniaoPorIdId: Int!) {
  buscarReuniaoPorId(id: $buscarReuniaoPorIdId) {
    id
    descricao
    local
    grupo_participante_id
    data_reuniao
    horario
    reuniao_participante {
      id
      reuniao_id
      participante_id
      participante_grupo
      presente
      horario_presenca
      participante {
        nome
        grupo
        cargo
        posicao_relatorio
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuscarReuniaoPorIdGQL extends Apollo.Query<BuscarReuniaoPorIdQuery, BuscarReuniaoPorIdQueryVariables> {
    override document = BuscarReuniaoPorIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FiltrarReuniaoDocument = gql`
    query FiltrarReuniao($filter: ReuniaoListInput!) {
  filtrarReuniao(filter: $filter) {
    rows {
      id
      descricao
      data_reuniao
      horario
      grupo_participante_id
      grupo_participante {
        azure_group_id
      }
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FiltrarReuniaoGQL extends Apollo.Query<FiltrarReuniaoQuery, FiltrarReuniaoQueryVariables> {
    override document = FiltrarReuniaoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AzureFaceIdentifyDocument = gql`
    mutation AzureFaceIdentify($data: ReuniaoReconhecimentoInput!) {
  azureFaceIdentify(data: $data) {
    id
    nome
    cpf
    cargo
    participante_id_azure
    foto
    autenticado
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AzureFaceIdentifyGQL extends Apollo.Mutation<AzureFaceIdentifyMutation, AzureFaceIdentifyMutationVariables> {
    override document = AzureFaceIdentifyDocument;
    
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