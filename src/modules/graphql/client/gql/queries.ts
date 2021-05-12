import {gql} from '@apollo/client';
import { CLIENTS_SEARCH_FIELDS } from './fragments';

export const CLIENTS_SEARCH_GQL = gql`
  ${CLIENTS_SEARCH_FIELDS}
  query ClientsSearch($page: Int, $perPage: Int, $term: String, $ids: [Int!]) {
    clientsSearch(page: $page, perPage: $perPage, term: $term, ids: $ids) {
      ...clientsSearchFields
    }
  }
`;

export const STATES_GQL = gql`
  query {
    states {
        id
        shortCode
        name
        cities {
            id
            name
        }
    }
  }
`;