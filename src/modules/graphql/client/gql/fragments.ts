import {gql} from '@apollo/client';

export const AUTH_FIELDS = gql`
  fragment authFields on AuthInfo {
    token
    user {
        email
        firstName
        lastName
        cedula
        cellphone
    }
  }
`;

export const CLIENTS_SEARCH_FIELDS = gql`
  fragment clientsSearchFields on ClientPagination {
    currentPage
    totalPages
    results {
        id
        firstName
        lastName
        cedula
        address
        cellphone
        email
        city
        state {
            id
            name
            cities {
                id
                name
            }
        }
    }
  }
`;


export const CLIENT_FIELDS_GQL = gql`
  fragment clientFields on Client {
    id
    firstName
    lastName
    cedula
    address
    cellphone
    email
  }
`;