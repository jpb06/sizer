import { useAxiosQuery } from './generic/useAxiosQuery';
import {
  GetChaptersWithMembersError,
  GetChaptersWithMembersSuccess,
  path,
} from './types/dynamic/LoggedUserController/getChaptersWithMembers';

export const useUserChaptersQuery = useAxiosQuery<
  GetChaptersWithMembersSuccess,
  GetChaptersWithMembersError
>('user-chapters', path, 'GET');
