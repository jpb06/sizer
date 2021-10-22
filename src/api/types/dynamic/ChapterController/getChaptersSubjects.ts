/** getChaptersSubjects
 * verb: get
 * summary: Chapter's subjects
 * description: Gets the chapter's subjects
 */

import { SubjectsResultDto, ApiResponseDto } from './../api-types';

export const getPath = (id: number): string =>
  `${process.env.NEXT_PUBLIC_API_URL}/chapter/${id}/subjects`;

export type GetChaptersSubjectsSuccess = SubjectsResultDto;
export type GetChaptersSubjectsError = ApiResponseDto;
