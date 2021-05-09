import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './src/pages/home/home';

const client = new ApolloClient({
  uri: 'https://onboarding-redesign.dev.elenas.la/gql/',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}
