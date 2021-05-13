import { LOGIN_GQL } from "../src/modules/graphql/client/gql/mutations";
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
    result: {
      data: {
        login: {
          token: 'Token werwerwerwer',
        }
      },
    },
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
];
export default QueryMock;