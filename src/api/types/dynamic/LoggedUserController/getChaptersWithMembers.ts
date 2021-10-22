/** getChaptersWithMembers
 * verb: get
 * summary: Logged user's chapters
 * description: Gets the chapters the logged user belongs to
 */

import { ChaptersWithMembersResultDto, ApiResponseDto } from './../api-types';

export const path = `${process.env.NEXT_PUBLIC_API_URL}/logged-user/chapters`;

export type GetChaptersWithMembersSuccess = ChaptersWithMembersResultDto;
export type GetChaptersWithMembersError = ApiResponseDto;
