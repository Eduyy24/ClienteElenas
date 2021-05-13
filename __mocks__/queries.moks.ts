import { CREATE_CLIENT_GQL, LOGIN_GQL } from "../src/modules/graphql/client/gql/mutations";
import { STATES_GQL } from "../src/modules/graphql/client/gql/queries";

const QueryMock = [
  {
    request: {
      query: LOGIN_GQL,
      variables: {
        cellphone: '+572327199995',
        password: '13123123',
      },
    },
    result: () => {
      return {
        data: {
          login: {
            token: 'Token werwerwerwer',
          }
        },
      }
    }
  },
  {
    request: {
        query: STATES_GQL,
    },
    result: {
        data: {
            states: [
              {
                  id: 1,
                  name: 'La Guajira',
                  shortCode: 'TestCode',
                  cities: [
                      {
                          id: 1,
                          name: 'Test city',
                      } ,
                  ],
              },
              {
                  id: 2,
                  name: 'Amazonas',
                  shortCode: 'AMA',
                  cities: [
                      {
                          id: 3,
                          name: 'Leticia',
                      },
                  ],
              },
          ],
        },
    },
  },
  {
    request: {
        query: CREATE_CLIENT_GQL,
        variables: {
            input: {
                firstName: 'Leandro',
                lastName: 'Castro',
                email: 'eee@ii.oo',
                cedula: '998877',
                cellphone: '+573124567898',
                address: {
                    streetAddress: 'Test streetAddress',
                    city: 'Leticia',
                    cityId: 3,
                    stateShortCode: 'AMA',
                    stateId: 2,
                    country: 'Colombia',
                },
            },
        },
    },
    result: {
        data: {
            createClient: {
                __typename: 'Client',
            },
        },
    },
},
];
export default QueryMock;