/** getSubjects
 * verb: get
 * summary: Logged user's subjects
 * description: Gets the subjects this user has access to
 */

import { SubjectsResultDto, ApiResponseDto } from './../api-types';

export const path = `${process.env.NEXT_PUBLIC_API_URL}/logged-user/subjects`;

export type GetSubjectsSuccess = SubjectsResultDto;
export type GetSubjectsError = ApiResponseDto;
