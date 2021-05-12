import {useMutation, useQuery} from '@apollo/client';
import { useEffect, useState } from 'react';
import { EmptyFuntion } from '../../../config/types';
import { CREATE_CLIENT_GQL, LOGIN_GQL } from './gql/mutations';
import { CLIENTS_SEARCH_GQL, STATES_GQL } from './gql/queries';
import {ClientInputModel, ClientOutputModel, StateModel} from './model/ClientModel';

export const getLoginMutation = () => useMutation(LOGIN_GQL);

/**
 * Hook que ejecuta el Query para @var {CLIENTS_SEARCH_GQL},
 * no implementar fuera de un componente
 * @returns object
 * @var {clients}, datos que contiene la lista de clientes a renderizar
 * @var {refetch}, metodo que permite realizar un actualización de la consulta
 */
export const useGetClients = () => {
  const clientsResult = useQuery(CLIENTS_SEARCH_GQL)
  const [clients, setClients] = useState(Array<ClientOutputModel>(0))
  
  useEffect(() => {
    if (clientsResult.data) {
      setClients(clientsResult.data.clientsSearch.results);
    }
    if(clientsResult.error) {
      // manejar, notificar el error "crashlitycs"
    }
  }, [clientsResult.data, clientsResult.error]);

  return {clients, refetch: clientsResult.refetch};
}

/**
 * Hook que ejecuta el Query para @var {STATES_GQL},
 * no implementar fuera de un componente
 * @returns {StateModel[]} contiene la lista de estados a renderizar
 */
 export const useGetStates = (): StateModel[] => {
  const statesResult = useQuery(STATES_GQL)
  const [states, setStates] = useState(Array<StateModel>(0))
  
  useEffect(() => {
    if (statesResult.data) {
      setStates(statesResult.data.states);
    }
    if(statesResult.error) {
      // manejar, notificar el error "crashlitycs"
    }
  }, [statesResult.data, statesResult.error]);

  return states;
}

/**
 * Hook Ejecuta la Mutación para @var {CREATE_CLIENT_GQL},
 * no implementar fuera de un componente.
 * Ejecucion de la funtion 
 * @example 
 * // Para un funtion component
 * {
 *  const createClient = useCreateClient()
 *  const client = new Client()
 *  const onPressButton = () => createClient(client)
 * 
 *  return (
 *    <Button title="Crear" onPress={onPressButton}/>
 *  )
 * }
 * @return Funtion @type{(client: ClientInputModel) => Function }
 */
 export const useCreateClient = (
    successResolve?: EmptyFuntion,
    errorResolve?: EmptyFuntion,
    ) => {
  const [launch, result] = useMutation(CREATE_CLIENT_GQL)

  useEffect(() => {
    if (result.data) {
      successResolve && successResolve()
    }
    if(result.error) {
      errorResolve && errorResolve()
    }
  }, [result.data, result.error]);

  return (client: ClientInputModel) => launch({
    variables: {
        input: {...client},
    },
  });
}