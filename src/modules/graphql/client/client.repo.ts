import {useMutation} from '@apollo/client';
import { LOGIN_GQL } from './gql/mutations';

export const getLoginMutation = () => useMutation(LOGIN_GQL);