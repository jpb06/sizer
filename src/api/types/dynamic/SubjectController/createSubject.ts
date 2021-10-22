/** createSubject
 * verb: post
 * summary: Create a subject
 * description: Crates a new subject in a chapter
 */

import {
  NewSubjectDto,
  CreateSubjectResultDto,
  ApiResponseDto,
} from './../api-types';

export const path = `${process.env.NEXT_PUBLIC_API_URL}/subject`;

export type RequestBody = NewSubjectDto;

export type CreateSubjectSuccess = CreateSubjectResultDto;
export type CreateSubjectError = ApiResponseDto;
