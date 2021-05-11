import {useMutation, useQuery} from '@apollo/client';
import { useEffect, useState } from 'react';
import { LOGIN_GQL } from './gql/mutations';
import { CLIENTS_SEARCH_GQL } from './gql/queries';
import ClientModel from './model/ClientModel';

export const getLoginMutation = () => useMutation(LOGIN_GQL);

/**
 * Ejecuta el Query para @var {CLIENTS_SEARCH_GQL}
 * @returns {ClientModel[]}
 */
export const getClients = (): ClientModel[] => {
  const clientsData = useQuery(CLIENTS_SEARCH_GQL)
  const [clients, setClients] = useState(Array<ClientModel>(0))
  
  useEffect(() => {
    if (clientsData.data) {
      setClients(clientsData.data.clientsSearch.results);
    }
  }, [clientsData.data]);

  return clients;
}