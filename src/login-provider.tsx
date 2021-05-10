import React, {useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { View, Text } from 'react-native';
import { getLoginMutation } from './modules/graphql/client/client.repo';
import Home from './pages/home/home';
import ApolloConfig from './modules/graphql/apollo';
import LoadingComponent from './components/loading-component';

/**
 * Componente encargado de manejar el login del aplicativo, en función del estado de este,
 * renderiza el home o en su defecto un LoadingComponent.
 * 
 * @author Eduardo Pinedo
 * @returns {JSX.Element}
 */
const LoginProvider = (): JSX.Element => {
  const [Login, result] = getLoginMutation()
  const [token, setToken] = useState('');
    
  useEffect(() => {
    if (result && result.data) {
      console.log(result.data);
      setToken(result.data.login.token)
    }
  }, [result.data]);

  !result.data && Login({variables: {cellphone: '+573057199995',password: 'nueva123'}});

  if(token){
    return (
      <LoadingComponent />
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

export default LoginProvider