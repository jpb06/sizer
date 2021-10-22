import { useQuery, UseQueryResult } from 'react-query';

export const useToken = (): UseQueryResult<string> =>
  useQuery<string>('token', () => '');
