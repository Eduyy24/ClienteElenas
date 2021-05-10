import {gql} from '@apollo/client';

export const LOGIN_GQL = gql`
  mutation Login($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      token
    }
  }
`;