import { QueryKey, UseQueryOptions } from 'react-query';

import { UnWrapResult } from './unwrap-result.type';

export type AxiosQueryOptions<TSuccess, TError> =
  | Omit<
      UseQueryOptions<
        UnWrapResult<TSuccess> | undefined,
        TError,
        UnWrapResult<TSuccess>,
        QueryKey
      >,
      'queryKey' | 'queryFn'
    >
  | undefined;
