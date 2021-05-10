import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export default class ApolloConfig {
  token;
  constructor(token?: string) {
    this.token = token;
  }

  private httpLink = createHttpLink({
    uri: 'https://jr-fix-accounting-operation-types.dev.elenas.la/gql/',
  });

  private authLink = setContext(async (_, { headers }) => {
    let authHeaders = { headers };
    if (this.token) {
      authHeaders = {
        headers: {
          ...headers,
          authorization: `Token ${this.token}`,
        },
      };
    }
    return authHeaders;
  });

  getApolloClient = () =>
    new ApolloClient({
      link: this.authLink.concat(this.httpLink),
      cache: new InMemoryCache({
        addTypename: true,
      })
    });
};