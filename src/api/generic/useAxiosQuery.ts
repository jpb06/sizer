import { Method } from 'axios';
import { useQuery } from 'react-query';

import { axiosRequest } from '@logic/axios/axios-request';

import { AxiosQueryOptions } from './types/axios-query-options.type';
import { QueryResult } from './types/query-result.type';
import { UnWrapResult } from './types/unwrap-result.type';

type AxiosQueryProps<TSuccess, TError> = {
  data?: unknown;
  options?: AxiosQueryOptions<TSuccess, TError>;
};

export const useAxiosQuery =
  <TSuccess, TError>(
    key: string | Array<unknown>,
    url: string,
    method: Method
  ) =>
  ({
    data = undefined,
    options = {},
  }: AxiosQueryProps<TSuccess, TError>): QueryResult<TSuccess, TError> =>
    useQuery<
      UnWrapResult<TSuccess> | undefined,
      TError,
      UnWrapResult<TSuccess>
    >(key, () => axiosRequest<TSuccess>({ method, url, data }), options);
