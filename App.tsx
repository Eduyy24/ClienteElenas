import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ApolloConfig from './src/modules/graphql/apollo';
import LoginProvider from './src/login-provider';


export default function App() {
  const client = new ApolloConfig().getApolloClient();
  return (
    <ApolloProvider client={client}>
      <LoginProvider />
    </ApolloProvider>
  )
}

