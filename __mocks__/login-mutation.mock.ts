import { LOGIN_GQL } from "../src/modules/graphql/client/gql/mutations";

const LoginMutationMock = [
  {
    request: {
      query: LOGIN_GQL,
      variables: {
        cellphone: '+573057199995',
        password: 'nueva123',
      },
    },
    result: {
      data: {
        login: {
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiKzU3MzA1NzE5OTk5NSIsImlhdCI6MTYyMDg4OTA2MX0.CDvL91y6Px12HZfMqHG8vvE4CY0ZTcVeSjw_h8BMUfI',
        }
      },
    },
  },
];
export default LoginMutationMock;