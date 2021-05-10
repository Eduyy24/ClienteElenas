import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { View, Text } from 'react-native';
import Home from './src/pages/home/home';

import { getLoginMutation } from './src/modules/graphql/client/client.repo';
import ApolloConfig from './src/modules/graphql/apollo';


export default function App() {
  const client = new ApolloConfig().getApolloClient();
  return (
    <ApolloProvider client={client}>
      <RenderProvider />
    </ApolloProvider>
  )
}

const RenderProvider = () => {
  const [Login, result] = getLoginMutation()
  const [token, setToken] = useState('');
    
  useEffect(() => {
    if (result && result.data) {
      console.log(result.data);
      setToken(result.data.login.token)
    }
  }, [result]);

  !token && Login({variables: {cellphone: '+573057199995',password: 'nueva123'}});
  
  if(!token){
    return (
      <View>
        <Text>Cargando ...</Text>
      </View>
    )
  } else {
    const client = new ApolloConfig(token).getApolloClient();
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    )
  }
    
}
