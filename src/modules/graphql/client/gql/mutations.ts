import {gql} from '@apollo/client';
import { AUTH_FIELDS } from './fragments';

export const LOGIN_GQL = gql`
${AUTH_FIELDS}
mutation Login($cellphone: String!, $password: String!) {
  login(cellphone: $cellphone, password: $password) {
    ...authFields
  }
}
`;