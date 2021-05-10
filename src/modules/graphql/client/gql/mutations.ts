import {gql} from '@apollo/client';

export const LOGIN_GQL = gql`
  fragment authFields on AuthInfo {
    token
  }
  mutation Login {
    login(cellphone:"+573057199995", password:"nueva123"){
      ...authFields
    }
  }
`;