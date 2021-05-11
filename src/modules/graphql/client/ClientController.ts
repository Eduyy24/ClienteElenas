import {useMutation, useQuery} from '@apollo/client';
import { useEffect, useState } from 'react';
import { CREATE_CLIENT_GQL, LOGIN_GQL } from './gql/mutations';
import { CLIENTS_SEARCH_GQL } from './gql/queries';
import {ClientOutputModel} from './model/ClientModel';

export const getLoginMutation = () => useMutation(LOGIN_GQL);

/**
 * Hook que ejecuta el Query para @var {CLIENTS_SEARCH_GQL},
 * no implementar fuera de un componente
 * @returns {ClientOutputModel[]}
 */
export const getClients = (): ClientOutputModel[] => {
  const clientsData = useQuery(CLIENTS_SEARCH_GQL)
  const [clients, setClients] = useState(Array<ClientOutputModel>(0))
  
  useEffect(() => {
    if (clientsData.data) {
      setClients(clientsData.data.clientsSearch.results);
    }
    if(clientsData.error) {
      // manejar, notificar el error "crashlitycs"
    }
  }, [clientsData.data]);

  return clients;
}


/**
 * Hook Ejecuta la Mutación para @var {CREATE_CLIENT_GQL},
 * no implementar fuera de un componente
 * @returns {}
 */
 export const createClient = () => {
  const [launch, result] = useMutation(CREATE_CLIENT_GQL)


  useEffect(() => {
    if (result.data) {
    }
    if(result.error) {
      // manejar, notificar el error "crashlitycs"
    }
  }, [result.data]);

  return '';
}