/** login
 * verb: post
 * summary: Login route
 * description: Authenticates a user from his google auth token
 */

import { LoginBodyDto, LoginResultDto, ApiResponseDto } from './../api-types';

export const path = `${process.env.NEXT_PUBLIC_API_URL}/authentication/login`;

export type RequestBody = LoginBodyDto;

export type LoginSuccess = LoginResultDto;
export type LoginError = ApiResponseDto;
