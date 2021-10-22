export interface LoginBodyDto {
  token: string;
}
export interface LoginResultDataDto {
  token: string;
}
export interface LoginResultDto {
  result: LoginResultDataDto;
}
export interface ApiResponseDto {
  statusCode: number;
  message: string;
}
export interface ChapterMemberDto {
  idUser: number;
  userFullName: string;
  userEmail: string;
  userPictureUrl: string;
  role: string;
}
export interface ChapterWithMembersDto {
  id: number;
  name: string;
  members: Array<ChapterMemberDto>;
}
export interface ChaptersWithMembersResultDto {
  result: Array<ChapterWithMembersDto>;
}
export interface ChapterDto {
  id: number;
  name: string;
}
export interface TerseUserDto {
  id: number;
  fullName: string;
  email: string;
}
export interface DiscussionDto {
  id: number;
  comment: string;
  link: string;
  createdAt: string;
  user: TerseUserDto;
}
export interface SubjectWithDiscussionsDto {
  id: number;
  title: string;
  details: string;
  link: string;
  createdAt: string;
  closedAt: string;
  answer: string;
  chapter: ChapterDto;
  discussion: Array<DiscussionDto>;
}
export interface SubjectsResultDto {
  result: Array<SubjectWithDiscussionsDto>;
}
export interface NewSubjectDto {
  idChapter: number;
  title: string;
  details: string;
  link: string;
}
export interface SubjectDto {
  id: number;
  title: string;
  details: string;
  link: string;
  createdAt: string;
  closedAt: string;
  answer: string;
  chapter: ChapterDto;
}
export interface CreateSubjectResultDto {
  result: SubjectDto;
}
