import { localStorageKey as Key } from '@logic/local-storage';

import { useAxiosMutation } from './generic/useAxiosMutation';
import {
  LoginError,
  LoginSuccess,
  path,
  RequestBody,
} from './types/dynamic/AuthenticationController/login';
import { LoginResultDataDto } from './types/dynamic/api-types';

export const onLoginSuccess =
  (push: (url: string) => void) =>
  (data: LoginResultDataDto | undefined): void => {
    if (data?.token) {
      localStorage.setItem(Key.token, data?.token);
      push('/profile');
    }
  };

export const useLoginMutation = useAxiosMutation<
  LoginSuccess,
  LoginError,
  RequestBody
>(path, 'POST');
