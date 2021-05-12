import {gql} from '@apollo/client';
import { AUTH_FIELDS, CLIENT_FIELDS_GQL } from './fragments';

export const LOGIN_GQL = gql`
${AUTH_FIELDS}
mutation Login($cellphone: String!, $password: String!) {
  login(cellphone: $cellphone, password: $password) {
    ...authFields
  }
}
`;

export const CREATE_CLIENT_GQL = gql`
  ${CLIENT_FIELDS_GQL}
  mutation CreateClient($input: ClientInput!) {
    createClient(input: $input) {
      ...clientFields
    }
  }
`;

export const UPDATE_CLIENT_GQL = gql`
  ${CLIENT_FIELDS_GQL}
  mutation UpdateClient($id: Int!, $input: ClientInput!) {
    updateClient(id: $id, input: $input) {
      ...clientFields
    }
  }
`;