import { Method } from 'axios';
import { useMutation } from 'react-query';

import { axiosRequest } from '@logic/axios/axios-request';

import { AxiosMutationOptions } from './types/axios-mutation-options.type';
import { MutationResult } from './types/mutation-result.type';
import { UnWrapResult } from './types/unwrap-result.type';

export const useAxiosMutation =
  <TData, TError, TVariables>(
    url: string,
    method: Method,
    beforeInvokeOptions?: AxiosMutationOptions<TData, TError, TVariables>
  ) =>
  (
    afterInvokeOptions?: AxiosMutationOptions<TData, TError, TVariables>
  ): MutationResult<TData, TError, TVariables> => {
    const options = { ...beforeInvokeOptions, ...afterInvokeOptions };

    return useMutation<UnWrapResult<TData> | undefined, TError, TVariables>(
      (data: TVariables) => axiosRequest<TData>({ method, url, data }),
      options
    );
  };
