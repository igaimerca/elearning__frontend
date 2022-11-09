import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddGroupMemberInput = {
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type AddGroupModeratorInput = {
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  number: Scalars['Float'];
  state: Scalars['String'];
  street: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  zipCode: Scalars['String'];
};

export type Announcement = {
  __typename?: 'Announcement';
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  district?: Maybe<District>;
  districtId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Announcements = {
  __typename?: 'Announcements';
  data: Array<Announcement>;
  pageInfo: PageInfo;
};

export type Assignment = {
  __typename?: 'Assignment';
  course: Course;
  courseId: Scalars['String'];
  description: Scalars['String'];
  due: Scalars['DateTime'];
  id: Scalars['String'];
  marks: Scalars['Float'];
  title: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type Assignments = {
  __typename?: 'Assignments';
  data: Array<Assignment>;
  pageInfo: PageInfo;
};

export type AuditLog = {
  __typename?: 'AuditLog';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type BugReport = {
  __typename?: 'BugReport';
  consequence: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  issue: Scalars['String'];
  phone: Scalars['String'];
  reproduce: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type BugReports = {
  __typename?: 'BugReports';
  data: Array<BugReport>;
  pageInfo: PageInfo;
};

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  id: Scalars['String'];
  recurring?: Maybe<Scalars['String']>;
  recurringDate?: Maybe<Scalars['DateTime']>;
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type CalendarEvents = {
  __typename?: 'CalendarEvents';
  data: Array<CalendarEvent>;
  pageInfo: PageInfo;
};

export type Course = {
  __typename?: 'Course';
  announcements: Array<Announcement>;
  courseCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  schoolId: Scalars['String'];
  students: Array<StudentToCourse>;
  teacher?: Maybe<User>;
  teacherId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Courses = {
  __typename?: 'Courses';
  data: Array<Course>;
  pageInfo: PageInfo;
};

export type CreateAddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  number: Scalars['Float'];
  state: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CreateAdminInput = {
  email: Scalars['String'];
};

export type CreateAnnouncementInput = {
  courseId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateAssignmentInput = {
  courseId: Scalars['String'];
  description: Scalars['String'];
  due: Scalars['DateTime'];
  folderPath: Scalars['String'];
  marks?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type CreateAuditLogInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateBugReportInput = {
  consequence: Scalars['String'];
  email: Scalars['String'];
  issue: Scalars['String'];
  phone: Scalars['String'];
  reproduce: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type CreateCalendarEventInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  recurring?: InputMaybe<Scalars['String']>;
  recurringDate?: InputMaybe<Scalars['DateTime']>;
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type CreateCourseInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
  teacherId: Scalars['String'];
};

export type CreateDistrictInput = {
  about?: InputMaybe<Scalars['String']>;
  address: CreateAddressInput;
  banner?: InputMaybe<Scalars['Upload']>;
  daLicenses?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  parentLicenses?: InputMaybe<Scalars['Float']>;
  psaLicences?: InputMaybe<Scalars['Float']>;
  saLicenses?: InputMaybe<Scalars['Float']>;
  schoolLicenses?: InputMaybe<Scalars['Float']>;
  studentLicenses?: InputMaybe<Scalars['Float']>;
  teacherLicenses?: InputMaybe<Scalars['Float']>;
};

export type CreateErrorInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateFileInput = {
  fileType?: InputMaybe<Scalars['String']>;
  folderId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateFolderInput = {
  color?: InputMaybe<Scalars['String']>;
  isHidden?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentFolderId?: InputMaybe<Scalars['String']>;
};

export type CreateGroupInput = {
  confidential: Scalars['Boolean'];
  description: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
};

export type CreateGroupMessageInput = {
  filePath?: InputMaybe<Scalars['String']>;
  messageGroupId: Scalars['String'];
  text: Scalars['String'];
};

export type CreateKnowledgeBaseInput = {
  articlePath?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  videoUrl?: InputMaybe<Scalars['String']>;
};

export type CreateLiveChatInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateMessageGroupInput = {
  filePath?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateMessageInput = {
  filePath?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  toId: Scalars['String'];
};

export type CreatePdaInput = {
  districtId: Scalars['String'];
  email: Scalars['String'];
};

export type CreateQuickInfoInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateReportInput = {
  description: Scalars['String'];
  read: Scalars['Boolean'];
  resolution: Scalars['String'];
  resolved: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateResponse = {
  __typename?: 'CreateResponse';
  message: Scalars['String'];
  status: Scalars['String'];
};

export type CreateSchoolInput = {
  address: CreateAddressInput;
  districtId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateSubmissionInput = {
  assignmentId: Scalars['String'];
  attachments?: InputMaybe<Array<Scalars['Upload']>>;
  comment?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['Float']>;
  note?: InputMaybe<Scalars['String']>;
  submitterId: Scalars['String'];
};

export type CreateSuggestionInput = {
  description: Scalars['String'];
  read: Scalars['Boolean'];
  starred: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateSupportInput = {
  description: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
};

export type CreateTimetableInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateUserInput = {
  districtId: Scalars['String'];
  email: Scalars['String'];
  schoolId: Scalars['String'];
};

export type District = {
  __typename?: 'District';
  about?: Maybe<Scalars['String']>;
  address: Address;
  addressId: Scalars['String'];
  banner?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  schools?: Maybe<Array<School>>;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type Districts = {
  __typename?: 'Districts';
  data: Array<District>;
  pageInfo: PageInfo;
};

export type EnableTfaInput = {
  tfaCode: Scalars['String'];
};

export type Error = {
  __typename?: 'Error';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime'];
  filePath: Scalars['String'];
  folder?: Maybe<Folder>;
  folderId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  sharedFiles?: Maybe<Array<SharedFile>>;
  size: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type Files = {
  __typename?: 'Files';
  data: Array<File>;
  pageInfo: PageInfo;
};

export type Folder = {
  __typename?: 'Folder';
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  files?: Maybe<Array<File>>;
  id: Scalars['String'];
  isHidden?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentFolderId?: Maybe<Scalars['String']>;
  sharedFolders?: Maybe<Array<SharedFolder>>;
  subFolders?: Maybe<Array<Folder>>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type Folders = {
  __typename?: 'Folders';
  data: Array<Folder>;
  pageInfo: PageInfo;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  admin: User;
  adminId: Scalars['String'];
  confidential: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  members?: Maybe<Array<GroupUser>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GroupMessage = {
  __typename?: 'GroupMessage';
  createdAt: Scalars['DateTime'];
  filePath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  messageGroupId: Scalars['String'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type GroupUser = {
  __typename?: 'GroupUser';
  createdAt: Scalars['DateTime'];
  group: Group;
  groupId: Scalars['String'];
  id: Scalars['String'];
  moderator: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type KnowledgeBase = {
  __typename?: 'KnowledgeBase';
  articlePath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
  videoUrl?: Maybe<Scalars['String']>;
};

export type KnowledgeBases = {
  __typename?: 'KnowledgeBases';
  data: Array<KnowledgeBase>;
  pageInfo: PageInfo;
};

export type LeaveGroupInput = {
  id: Scalars['String'];
};

export type LiveChat = {
  __typename?: 'LiveChat';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type LoginAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  tfactorAuthCode?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: UserResponse;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  filePath?: Maybe<Scalars['String']>;
  from: User;
  fromId: Scalars['String'];
  id: Scalars['String'];
  text: Scalars['String'];
  to: User;
  toId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGroupMember: Group;
  addGroupModerator: Group;
  addSubmissionComment: Submission;
  addUserToGroup: UserMessageGroup;
  contactSupport: Support;
  createAnnouncement: Announcement;
  createAssignment: Assignment;
  createAuditLog: AuditLog;
  createBugReport: BugReport;
  createCalendarEvent: CalendarEvent;
  createCcsa: CreateResponse;
  createCourse: Course;
  createCourseWithFile: Course;
  createCsa: CreateResponse;
  createDa: CreateResponse;
  createDistrict: District;
  createError: Error;
  createFile: File;
  createFolder: Folder;
  createGroup: Group;
  createKnowledgeBase: KnowledgeBase;
  createLiveChat: LiveChat;
  createMessageGroup: UserMessageGroup;
  createMessageGroupWithFile: UserMessageGroup;
  createParent: CreateResponse;
  createPda: CreateResponse;
  createPsa: CreateResponse;
  createQuickInfo: QuickInfo;
  createReport: Report;
  createSa: CreateResponse;
  createSchool: School;
  createStudent: CreateResponse;
  createSubmission: Submission;
  createSuggestion: Suggestion;
  createTeacher: CreateResponse;
  createTimetable: Timetable;
  deleteCourse: Course;
  deleteGroup: UserMessageGroup;
  /** delete message from group */
  deleteMessageInGroup: GroupMessage;
  enrollStudent: Course;
  forgotPassword: LogoutResponse;
  leaveGroup: Group;
  login: LoginResponse;
  logout: LogoutResponse;
  refreshToken: LoginResponse;
  removeAssignment: Assignment;
  removeAuditLog: AuditLog;
  removeBugReport: BugReport;
  removeCalendarEvent: CalendarEvent;
  removeDistrict: District;
  removeError: Error;
  removeFile: File;
  removeFolder: Folder;
  removeGroupMessage: GroupMessage;
  removeKnowledgeBase: KnowledgeBase;
  removeLiveChat: LiveChat;
  removeMessage: Message;
  removeQuickInfo: QuickInfo;
  removeSchool: School;
  removeSubmission: Submission;
  removeTimetable: Timetable;
  removeUser: User;
  removeUserFromGroup: UserMessageGroup;
  resetPassword: LogoutResponse;
  sendMessage: Message;
  /** Create a new group message */
  sendMessageInGroup: GroupMessage;
  /** Create a new group message with a file */
  sendMessageInGroupWithFile: GroupMessage;
  sendMessageWithFile: Message;
  setAdminRead: Scalars['Boolean'];
  setAdminUnread: Scalars['Boolean'];
  shareFile: Scalars['Boolean'];
  shareFolder: Scalars['Boolean'];
  transferGroupAdmin: Group;
  updateAnyUser: User;
  updateAssignment: Assignment;
  updateAuditLog: AuditLog;
  updateBugReport: BugReport;
  updateCalendarEvent: CalendarEvent;
  updateCourse: Course;
  updateCourseWithFile: Course;
  updateDistrict: District;
  updateError: Error;
  updateFile: File;
  updateFolder: Folder;
  updateGroup: UserMessageGroup;
  updateGroupMessage: GroupMessage;
  updateGroupWithFile: UserMessageGroup;
  updateKnowledgeBase: KnowledgeBase;
  updateLiveChat: LiveChat;
  updateMessage: Message;
  /** update group */
  updateMessageInGroup: GroupMessage;
  /** update group message with file */
  updateMessageInGroupWithFile: GroupMessage;
  updateMessageWithFile: Message;
  updateQuickInfo: QuickInfo;
  updateSchool: School;
  updateSubmission: Submission;
  updateTimetable: Timetable;
  updateUserRole: User;
};


export type MutationAddGroupMemberArgs = {
  addGroupMemberInput: AddGroupMemberInput;
};


export type MutationAddGroupModeratorArgs = {
  addGroupModeratorInput: AddGroupModeratorInput;
};


export type MutationAddSubmissionCommentArgs = {
  comment: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAddUserToGroupArgs = {
  groupId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationContactSupportArgs = {
  createSupportInput: CreateSupportInput;
};


export type MutationCreateAnnouncementArgs = {
  createAnnouncementInput: CreateAnnouncementInput;
};


export type MutationCreateAssignmentArgs = {
  createAssignmentInput: CreateAssignmentInput;
};


export type MutationCreateAuditLogArgs = {
  createAuditLogInput: CreateAuditLogInput;
};


export type MutationCreateBugReportArgs = {
  createBugReportInput: CreateBugReportInput;
};


export type MutationCreateCalendarEventArgs = {
  createCalendarEventInput: CreateCalendarEventInput;
};


export type MutationCreateCcsaArgs = {
  createCcsaInput: CreateAdminInput;
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationCreateCourseWithFileArgs = {
  createCourseInput: CreateCourseInput;
  file: Scalars['Upload'];
};


export type MutationCreateCsaArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateDaArgs = {
  createDaInput: CreatePdaInput;
};


export type MutationCreateDistrictArgs = {
  createDistrictInput: CreateDistrictInput;
};


export type MutationCreateErrorArgs = {
  createErrorInput: CreateErrorInput;
};


export type MutationCreateFileArgs = {
  createFileInput: CreateFileInput;
  file: Scalars['Upload'];
};


export type MutationCreateFolderArgs = {
  createFolderInput: CreateFolderInput;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};


export type MutationCreateKnowledgeBaseArgs = {
  createKnowledgeBaseInput: CreateKnowledgeBaseInput;
};


export type MutationCreateLiveChatArgs = {
  createLiveChatInput: CreateLiveChatInput;
};


export type MutationCreateMessageGroupArgs = {
  createGroupMessageInput: CreateMessageGroupInput;
};


export type MutationCreateMessageGroupWithFileArgs = {
  createGroupMessageInput: CreateMessageGroupInput;
  file: Scalars['Upload'];
};


export type MutationCreateParentArgs = {
  createParentInput: CreateUserInput;
};


export type MutationCreatePdaArgs = {
  createPdaInput: CreatePdaInput;
};


export type MutationCreatePsaArgs = {
  createPsaInput: CreateUserInput;
};


export type MutationCreateQuickInfoArgs = {
  createQuickInfoInput: CreateQuickInfoInput;
};


export type MutationCreateReportArgs = {
  createReportInput: CreateReportInput;
};


export type MutationCreateSaArgs = {
  createSaInput: CreateUserInput;
};


export type MutationCreateSchoolArgs = {
  createSchoolInput: CreateSchoolInput;
};


export type MutationCreateStudentArgs = {
  createStudentInput: CreateUserInput;
};


export type MutationCreateSubmissionArgs = {
  createSubmissionInput: CreateSubmissionInput;
};


export type MutationCreateSuggestionArgs = {
  createSuggestionInput: CreateSuggestionInput;
};


export type MutationCreateTeacherArgs = {
  createTeacherInput: CreateUserInput;
};


export type MutationCreateTimetableArgs = {
  createTimetableInput: CreateTimetableInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['String'];
};


export type MutationDeleteGroupArgs = {
  groupId: Scalars['String'];
};


export type MutationDeleteMessageInGroupArgs = {
  id: Scalars['String'];
};


export type MutationEnrollStudentArgs = {
  courseCode: Scalars['String'];
  studentId: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLeaveGroupArgs = {
  leaveGroupInput: LeaveGroupInput;
};


export type MutationLoginArgs = {
  loginData: LoginAuthInput;
};


export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};


export type MutationRemoveAssignmentArgs = {
  id: Scalars['String'];
};


export type MutationRemoveAuditLogArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveBugReportArgs = {
  id: Scalars['String'];
};


export type MutationRemoveCalendarEventArgs = {
  id: Scalars['String'];
};


export type MutationRemoveDistrictArgs = {
  id: Scalars['String'];
};


export type MutationRemoveErrorArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveFileArgs = {
  id: Scalars['String'];
};


export type MutationRemoveFolderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveGroupMessageArgs = {
  id: Scalars['String'];
};


export type MutationRemoveKnowledgeBaseArgs = {
  id: Scalars['String'];
};


export type MutationRemoveLiveChatArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMessageArgs = {
  id: Scalars['String'];
};


export type MutationRemoveQuickInfoArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSchoolArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSubmissionArgs = {
  id: Scalars['String'];
};


export type MutationRemoveTimetableArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserFromGroupArgs = {
  groupId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSendMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationSendMessageInGroupArgs = {
  createGroupMessageInput: CreateGroupMessageInput;
};


export type MutationSendMessageInGroupWithFileArgs = {
  createGroupMessageInput: CreateGroupMessageInput;
  file: Scalars['Upload'];
};


export type MutationSendMessageWithFileArgs = {
  createMessageInput: CreateMessageInput;
  file: Scalars['Upload'];
};


export type MutationSetAdminReadArgs = {
  id: Scalars['String'];
};


export type MutationSetAdminUnreadArgs = {
  id: Scalars['String'];
};


export type MutationShareFileArgs = {
  id: Scalars['String'];
  sharedWithId: Scalars['String'];
};


export type MutationShareFolderArgs = {
  id: Scalars['String'];
  sharedWithId: Scalars['String'];
};


export type MutationTransferGroupAdminArgs = {
  transferGroupAdminInput: TransferGroupAdminInput;
};


export type MutationUpdateAnyUserArgs = {
  updateUser: UpdateUserInput;
};


export type MutationUpdateAssignmentArgs = {
  updateAssignmentInput: UpdateAssignmentInput;
};


export type MutationUpdateAuditLogArgs = {
  updateAuditLogInput: UpdateAuditLogInput;
};


export type MutationUpdateBugReportArgs = {
  updateBugReportInput: UpdateBugReportInput;
};


export type MutationUpdateCalendarEventArgs = {
  updateCalendarEventInput: UpdateCalendarEventInput;
};


export type MutationUpdateCourseArgs = {
  updateCourseInput: UpdateCourseInput;
};


export type MutationUpdateCourseWithFileArgs = {
  file: Scalars['Upload'];
  updateCourseInput: UpdateCourseInput;
};


export type MutationUpdateDistrictArgs = {
  updateDistrictInput: UpdateDistrictInput;
};


export type MutationUpdateErrorArgs = {
  updateErrorInput: UpdateErrorInput;
};


export type MutationUpdateFileArgs = {
  updateFileInput: UpdateFileInput;
};


export type MutationUpdateFolderArgs = {
  updateFolderInput: UpdateFolderInput;
};


export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateMessageGroupInput;
};


export type MutationUpdateGroupMessageArgs = {
  updateGroupMessageInput: UpdateGroupMessageInput;
};


export type MutationUpdateGroupWithFileArgs = {
  file: Scalars['Upload'];
  updateGroupInput: UpdateMessageGroupInput;
};


export type MutationUpdateKnowledgeBaseArgs = {
  updateKnowledgeBaseInput: UpdateKnowledgeBaseInput;
};


export type MutationUpdateLiveChatArgs = {
  updateLiveChatInput: UpdateLiveChatInput;
};


export type MutationUpdateMessageArgs = {
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdateMessageInGroupArgs = {
  updateGroupMessageInput: UpdateGroupMessageInput;
};


export type MutationUpdateMessageInGroupWithFileArgs = {
  file: Scalars['Upload'];
  updateGroupMessageInput: UpdateGroupMessageInput;
};


export type MutationUpdateMessageWithFileArgs = {
  file: Scalars['Upload'];
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdateQuickInfoArgs = {
  updateQuickInfoInput: UpdateQuickInfoInput;
};


export type MutationUpdateSchoolArgs = {
  updateSchoolInput: UpdateSchoolInput;
};


export type MutationUpdateSubmissionArgs = {
  updateSubmissionInput: UpdateSubmissionInput;
};


export type MutationUpdateTimetableArgs = {
  updateTimetableInput: UpdateTimetableInput;
};


export type MutationUpdateUserRoleArgs = {
  id: Scalars['String'];
  newRole: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  limit: Scalars['Float'];
  skip: Scalars['Float'];
  total: Scalars['Float'];
};

export type ParentChild = {
  __typename?: 'ParentChild';
  address: Address;
  child: User;
  childId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  parent: User;
  parentId: Scalars['String'];
  relationship: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  assignment: Assignment;
  auditLog: AuditLog;
  bugReport: BugReport;
  bugReports: BugReports;
  calendarevent: CalendarEvent;
  calendarevents: CalendarEvents;
  countStudentsInSchool: Scalars['Float'];
  countTeachersInSchool: Scalars['Float'];
  course: Course;
  courses: Courses;
  currentUser: User;
  district: District;
  districts: Districts;
  enableTfa: CreateResponse;
  error: Error;
  file: File;
  files: Files;
  /** Get all groups a user has joined */
  findAllGroups: Array<GroupMessage>;
  findOneGroup: GroupMessage;
  findSchoolsInDistrict: Schools;
  folder: Folder;
  folders: Folders;
  getAllPublicUsers: Users;
  getAllUsersByCSA: Users;
  getAnnouncement: Announcement;
  getAnnouncements: Announcements;
  getAssignmentSubmissions: Submissions;
  getCountCoursesOfSchool: Scalars['Float'];
  /** Query returns dms about two people */
  getMessagesBetween: Array<Message>;
  getParentCompletedAssignment: Assignments;
  getParentOverDueAssignment: Assignments;
  getParentTodoAssignment: Assignments;
  getPublicUserById: User;
  getStudentCompletedAssignments: Assignments;
  getStudentOverDueAssignments: Assignments;
  getStudentTodoAssignments: Assignments;
  getStudentsBySchoolId: Users;
  getSubmission: Submission;
  getSubmissions: Submissions;
  getTeachersBySchoolId: Users;
  getUserById: User;
  getUsersByRole: Users;
  knowledgeBase: KnowledgeBase;
  knowledgeBases: KnowledgeBases;
  liveChat: LiveChat;
  message: Message;
  publishedKnowledgeBases: KnowledgeBases;
  quickInfo: QuickInfo;
  quickInfos: QuickInfos;
  report: Report;
  reports: Reports;
  school: School;
  schools: Schools;
  searchKnowledgeBase: KnowledgeBases;
  setupTfa: SetupTfaResponse;
  sharedFiles: Files;
  sharedFolders: Folders;
  suggestion: Suggestion;
  suggestions: Suggestions;
  timetable: Timetable;
  verifyTfaToken: CreateResponse;
};


export type QueryAssignmentArgs = {
  id: Scalars['String'];
};


export type QueryAuditLogArgs = {
  id: Scalars['Int'];
};


export type QueryBugReportArgs = {
  id: Scalars['String'];
};


export type QueryBugReportsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryCalendareventArgs = {
  id: Scalars['String'];
};


export type QueryCalendareventsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryCountStudentsInSchoolArgs = {
  schoolId: Scalars['String'];
};


export type QueryCountTeachersInSchoolArgs = {
  schoolId: Scalars['String'];
};


export type QueryCourseArgs = {
  id: Scalars['String'];
};


export type QueryCoursesArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryDistrictArgs = {
  id: Scalars['String'];
};


export type QueryDistrictsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryEnableTfaArgs = {
  enableTfaInput: EnableTfaInput;
};


export type QueryErrorArgs = {
  id: Scalars['Int'];
};


export type QueryFileArgs = {
  id: Scalars['String'];
};


export type QueryFilesArgs = {
  folderId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  listByFolder?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryFindOneGroupArgs = {
  id: Scalars['String'];
};


export type QueryFindSchoolsInDistrictArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryFolderArgs = {
  id: Scalars['String'];
};


export type QueryFoldersArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  parentFolderId?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAllPublicUsersArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAllUsersByCsaArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAnnouncementArgs = {
  id: Scalars['String'];
};


export type QueryGetAnnouncementsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAssignmentSubmissionsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetCountCoursesOfSchoolArgs = {
  schoolId: Scalars['String'];
};


export type QueryGetMessagesBetweenArgs = {
  userId: Scalars['String'];
};


export type QueryGetParentCompletedAssignmentArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetParentOverDueAssignmentArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetParentTodoAssignmentArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPublicUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetStudentCompletedAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetStudentOverDueAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetStudentTodoAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetStudentsBySchoolIdArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  schoolId: Scalars['String'];
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetSubmissionArgs = {
  id: Scalars['Int'];
};


export type QueryGetSubmissionsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetTeachersBySchoolIdArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  schoolId: Scalars['String'];
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUsersByRoleArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  role: Scalars['String'];
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryKnowledgeBaseArgs = {
  id: Scalars['String'];
};


export type QueryKnowledgeBasesArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryLiveChatArgs = {
  id: Scalars['Int'];
};


export type QueryMessageArgs = {
  id: Scalars['String'];
};


export type QueryPublishedKnowledgeBasesArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryQuickInfoArgs = {
  id: Scalars['String'];
};


export type QueryQuickInfosArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryReportArgs = {
  id: Scalars['String'];
};


export type QueryReportsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QuerySchoolArgs = {
  id: Scalars['String'];
};


export type QuerySchoolsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QuerySearchKnowledgeBaseArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  query: Scalars['String'];
  skip?: InputMaybe<Scalars['Float']>;
};


export type QuerySharedFilesArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QuerySharedFoldersArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QuerySuggestionArgs = {
  id: Scalars['String'];
};


export type QuerySuggestionsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryTimetableArgs = {
  id: Scalars['Int'];
};


export type QueryVerifyTfaTokenArgs = {
  verifyTfaInput: EnableTfaInput;
};

export type QuickInfo = {
  __typename?: 'QuickInfo';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type QuickInfos = {
  __typename?: 'QuickInfos';
  data: Array<QuickInfo>;
  pageInfo: PageInfo;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type Report = {
  __typename?: 'Report';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  read: Scalars['Boolean'];
  reportAdminReads?: Maybe<ReportAdminReads>;
  reporter: User;
  reporterId: Scalars['String'];
  resolution: Scalars['String'];
  resolved: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ReportAdminReads = {
  __typename?: 'ReportAdminReads';
  status: Scalars['String'];
};

export type Reports = {
  __typename?: 'Reports';
  data: Array<Report>;
  pageInfo: PageInfo;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
};

export type School = {
  __typename?: 'School';
  address: Address;
  addressId: Scalars['String'];
  announcements?: Maybe<Array<Announcement>>;
  createdAt: Scalars['DateTime'];
  district: District;
  districtId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type Schools = {
  __typename?: 'Schools';
  data: Array<School>;
  pageInfo: PageInfo;
};

export type SetupTfaResponse = {
  __typename?: 'SetupTfaResponse';
  qrCode: Scalars['String'];
};

export type SharedFile = {
  __typename?: 'SharedFile';
  createdAt: Scalars['DateTime'];
  file?: Maybe<File>;
  fileId: Scalars['String'];
  id: Scalars['String'];
  sharedWith?: Maybe<User>;
  sharedWithId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SharedFolder = {
  __typename?: 'SharedFolder';
  createdAt: Scalars['DateTime'];
  folder?: Maybe<Folder>;
  folderId: Scalars['String'];
  id: Scalars['String'];
  sharedWith?: Maybe<User>;
  sharedWithId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StudentToCourse = {
  __typename?: 'StudentToCourse';
  course?: Maybe<Course>;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  student?: Maybe<User>;
  studentId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Submission = {
  __typename?: 'Submission';
  assignment: Assignment;
  assignmentId: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  grade?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  note: Scalars['String'];
  submissionAttachments?: Maybe<Array<SubmissionAttachment>>;
  submitter: User;
  submitterId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubmissionAttachment = {
  __typename?: 'SubmissionAttachment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  linkToAttachment: Scalars['String'];
  submission: Submission;
  submissionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubmissionAttachmentInput = {
  id: Scalars['String'];
};

export type Submissions = {
  __typename?: 'Submissions';
  data: Array<Submission>;
  pageInfo: PageInfo;
};

export type Subscription = {
  __typename?: 'Subscription';
  announcementCreated: Announcement;
  groupMessageAdded: GroupMessage;
  groupMessageRemoved: GroupMessage;
  groupMessageUpdated: GroupMessage;
  messageAdded: Message;
  messageRemoved: Message;
  messageUpdated: Message;
};

export type Suggestion = {
  __typename?: 'Suggestion';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  read: Scalars['Boolean'];
  resolution: Scalars['String'];
  starred: Scalars['Boolean'];
  submitter: User;
  submitterId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Suggestions = {
  __typename?: 'Suggestions';
  data: Array<Suggestion>;
  pageInfo: PageInfo;
};

export type Support = {
  __typename?: 'Support';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Timetable = {
  __typename?: 'Timetable';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type TransferGroupAdminInput = {
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateAssignmentInput = {
  courseId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  folderPath?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  marks?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateAuditLogInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateBugReportInput = {
  consequence?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  issue?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reproduce?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCalendarEventInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  recurring?: InputMaybe<Scalars['String']>;
  recurringDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCourseInput = {
  description: Scalars['String'];
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
};

export type UpdateDistrictInput = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<CreateAddressInput>;
  banner?: InputMaybe<Scalars['Upload']>;
  daLicenses?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  logo?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  parentLicenses?: InputMaybe<Scalars['Float']>;
  psaLicences?: InputMaybe<Scalars['Float']>;
  removeBanner?: InputMaybe<Scalars['Boolean']>;
  removeLogo?: InputMaybe<Scalars['Boolean']>;
  saLicenses?: InputMaybe<Scalars['Float']>;
  schoolLicenses?: InputMaybe<Scalars['Float']>;
  studentLicenses?: InputMaybe<Scalars['Float']>;
  teacherLicenses?: InputMaybe<Scalars['Float']>;
};

export type UpdateErrorInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateFileInput = {
  fileType?: InputMaybe<Scalars['String']>;
  folderId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFolderInput = {
  color?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isHidden?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parentFolderId?: InputMaybe<Scalars['String']>;
};

export type UpdateGroupMessageInput = {
  filePath?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  messageGroupId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateKnowledgeBaseInput = {
  articlePath?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isPublic?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateLiveChatInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateMessageGroupInput = {
  filePath?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMessageInput = {
  filePath?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
  toId?: InputMaybe<Scalars['String']>;
};

export type UpdateQuickInfoInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSchoolInput = {
  address?: InputMaybe<CreateAddressInput>;
  districtId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSubmissionInput = {
  assignmentId?: InputMaybe<Scalars['String']>;
  attachments?: InputMaybe<Array<Scalars['Upload']>>;
  attachmentsToDelete?: InputMaybe<Array<SubmissionAttachmentInput>>;
  comment?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  submitterId?: InputMaybe<Scalars['String']>;
};

export type UpdateTimetableInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  interests?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profileAvailability: Scalars['String'];
  pronouns?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  bannerPicture?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  children: Array<ParentChild>;
  confidential: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  districtId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interests?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  parents: Array<ParentChild>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  profileAvailability: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  schoolId?: Maybe<Scalars['String']>;
  studentCourses: Array<StudentToCourse>;
  teacherCourses: Array<Course>;
  tfaEnabled?: Maybe<Scalars['Boolean']>;
  tfaSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserMessageGroup = {
  __typename?: 'UserMessageGroup';
  createdAt: Scalars['DateTime'];
  filePath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  messages: Array<GroupMessage>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<UserToUserMessageGroup>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  confidential: Scalars['Boolean'];
  courses?: Maybe<Array<Course>>;
  createdAt: Scalars['DateTime'];
  districtId: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interests?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profileAvailability: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  schoolId?: Maybe<Scalars['String']>;
  tfaEnabled?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
};

export type UserToUserMessageGroup = {
  __typename?: 'UserToUserMessageGroup';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  userMessageGroup: UserMessageGroup;
  userMessageGroupId: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  data: Array<User>;
  pageInfo: PageInfo;
};

export type LoginMutationMutationVariables = Exact<{
  loginData: LoginAuthInput;
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string, user: { __typename?: 'UserResponse', id: string, role: string } } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, email: string, bio?: string | null, birthday?: any | null, firstName?: string | null, lastName?: string | null, bannerPicture?: string | null, pronouns?: string | null, profilePicture?: string | null, profileAvailability: string, tfaEnabled?: boolean | null, interests?: string | null, confidential: boolean, role: string, createdAt: any, updatedAt: any, schoolId?: string | null } };

export type RefreshTokenMutationVariables = Exact<{
  data: RefreshTokenInput;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string, user: { __typename?: 'UserResponse', role: string, id: string } } };

export type CreateCalendarEventMutationMutationVariables = Exact<{
  calendarData: CreateCalendarEventInput;
}>;


export type CreateCalendarEventMutationMutation = { __typename?: 'Mutation', createCalendarEvent: { __typename?: 'CalendarEvent', description?: string | null, endDate: any, startDate: any } };

export type GetCalendarEventsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']>;
}>;


export type GetCalendarEventsQuery = { __typename?: 'Query', calendarevents: { __typename?: 'CalendarEvents', data: Array<{ __typename?: 'CalendarEvent', id: string, title: string, description?: string | null, startDate: any, endDate: any, recurring?: string | null }>, pageInfo: { __typename?: 'PageInfo', limit: number } } };

export type CreateNewDirectMessageMutationVariables = Exact<{
  message: CreateMessageInput;
}>;


export type CreateNewDirectMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string, text: string, createdAt: any, updatedAt: any } };

export type GetDirectMessagesQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetDirectMessagesQuery = { __typename?: 'Query', getMessagesBetween: Array<{ __typename?: 'Message', id: string, text: string, filePath?: string | null, createdAt: any, updatedAt: any, fromId: string, toId: string, from: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, profilePicture?: string | null }, to: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, profilePicture?: string | null } }> };

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessageSubscription = { __typename?: 'Subscription', messageAdded: { __typename?: 'Message', id: string, text: string, createdAt: any, updatedAt: any, to: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null } } };

export type CountCoursesInSchoolQueryVariables = Exact<{
  schoolId: Scalars['String'];
}>;


export type CountCoursesInSchoolQuery = { __typename?: 'Query', getCountCoursesOfSchool: number };

export type GetDistrictsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDistrictsQuery = { __typename?: 'Query', districts: { __typename?: 'Districts', data: Array<{ __typename?: 'District', id: string, name: string, addressId: string, about?: string | null, banner?: string | null, createdAt: any, updatedAt: any, address: { __typename?: 'Address', id: string, country: string, state: string, city: string, street: string, number: number, zipCode: string }, schools?: Array<{ __typename?: 'School', id: string, name: string }> | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string, password: string, phone?: string | null, birthday?: any | null }> | null }> } };

export type GetSchoolByIdQueryVariables = Exact<{
  schoolId: Scalars['String'];
}>;


export type GetSchoolByIdQuery = { __typename?: 'Query', school: { __typename?: 'School', id: string, name: string, createdAt: any, updatedAt: any, address: { __typename?: 'Address', id: string, zipCode: string, country: string, city: string } } };

export type GetStudentsBySchoolIdQueryVariables = Exact<{
  schoolId: Scalars['String'];
}>;


export type GetStudentsBySchoolIdQuery = { __typename?: 'Query', getStudentsBySchoolId: { __typename?: 'Users', data: Array<{ __typename?: 'User', id: string, profilePicture?: string | null, lastName?: string | null, firstName?: string | null, schoolId?: string | null, birthday?: any | null, pronouns?: string | null, email: string }>, pageInfo: { __typename?: 'PageInfo', total: number, skip: number, limit: number } } };

export type GetStudentCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentCoursesQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, studentCourses: Array<{ __typename?: 'StudentToCourse', course?: { __typename?: 'Course', id: string, name: string, courseCode: string, picture?: string | null, description: string, teacher?: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, profilePicture?: string | null } | null } | null }> } };

export type GetStudentTotolCompletedAssginementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentTotolCompletedAssginementsQuery = { __typename?: 'Query', getStudentCompletedAssignments: { __typename?: 'Assignments', pageInfo: { __typename?: 'PageInfo', total: number } } };

export type GetStudentTotalOverDueAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentTotalOverDueAssignmentsQuery = { __typename?: 'Query', getStudentOverDueAssignments: { __typename?: 'Assignments', pageInfo: { __typename?: 'PageInfo', total: number } } };

export type GetStudentTodoAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentTodoAssignmentsQuery = { __typename?: 'Query', getStudentTodoAssignments: { __typename?: 'Assignments', pageInfo: { __typename?: 'PageInfo', total: number } } };

export type GetStudentAnnouncementsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']>;
}>;


export type GetStudentAnnouncementsQuery = { __typename?: 'Query', getAnnouncements: { __typename?: 'Announcements', data: Array<{ __typename?: 'Announcement', id: string, type: string, title: string, description: string, createdAt: any, updatedAt: any }>, pageInfo: { __typename?: 'PageInfo', total: number, skip: number } } };

export type GetSchoolsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']>;
}>;


export type GetSchoolsQuery = { __typename?: 'Query', schools: { __typename?: 'Schools', data: Array<{ __typename?: 'School', id: string, name: string }>, pageInfo: { __typename?: 'PageInfo', total: number } } };

export type CountStudentsInSchoolQueryVariables = Exact<{
  schoolId: Scalars['String'];
}>;


export type CountStudentsInSchoolQuery = { __typename?: 'Query', countStudentsInSchool: number };

export type GetCoursesByTeacherQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesByTeacherQuery = { __typename?: 'Query', courses: { __typename?: 'Courses', pageInfo: { __typename?: 'PageInfo', total: number, limit: number }, data: Array<{ __typename?: 'Course', id: string, name: string, courseCode: string, description: string, createdAt: any, updatedAt: any }> } };

export type CountTeachersInSchoolQueryVariables = Exact<{
  schoolId: Scalars['String'];
}>;


export type CountTeachersInSchoolQuery = { __typename?: 'Query', countTeachersInSchool: number };

export type UpdateAnyUserMutationVariables = Exact<{
  userData: UpdateUserInput;
}>;


export type UpdateAnyUserMutation = { __typename?: 'Mutation', updateAnyUser: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, phone?: string | null, bio?: string | null, pronouns?: string | null, profileAvailability: string } };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, phone?: string | null, bio?: string | null, email: string, pronouns?: string | null, role: string, birthday?: any | null, bannerPicture?: string | null, profileAvailability: string } };

export type GetUsersByRoleQueryVariables = Exact<{
  role: Scalars['String'];
}>;


export type GetUsersByRoleQuery = { __typename?: 'Query', getUsersByRole: { __typename?: 'Users', data: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }>, pageInfo: { __typename?: 'PageInfo', total: number } } };

export type GetChatUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatUsersQuery = { __typename?: 'Query', getAllPublicUsers: { __typename?: 'Users', data: Array<{ __typename?: 'User', id: string, email: string, lastName?: string | null, firstName?: string | null }>, pageInfo: { __typename?: 'PageInfo', total: number } } };

export type GetChatUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetChatUserQuery = { __typename?: 'Query', getPublicUserById: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string } };


export const LoginMutationDocument = /*#__PURE__*/ `
    mutation loginMutation($loginData: LoginAuthInput!) {
  login(loginData: $loginData) {
    user {
      id
      role
    }
    accessToken
    refreshToken
  }
}
    `;
export const useLoginMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutationMutation, TError, LoginMutationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutationMutation, TError, LoginMutationMutationVariables, TContext>(
      ['loginMutation'],
      (variables?: LoginMutationMutationVariables) => fetcher<LoginMutationMutation, LoginMutationMutationVariables>(client, LoginMutationDocument, variables, headers)(),
      options
    );
export const CurrentUserDocument = /*#__PURE__*/ `
    query currentUser {
  currentUser {
    id
    email
    bio
    birthday
    firstName
    lastName
    bannerPicture
    pronouns
    profilePicture
    profileAvailability
    tfaEnabled
    interests
    confidential
    role
    createdAt
    updatedAt
    schoolId
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['currentUser'] : ['currentUser', variables],
      fetcher<CurrentUserQuery, CurrentUserQueryVariables>(client, CurrentUserDocument, variables, headers),
      options
    );

useCurrentUserQuery.getKey = (variables?: CurrentUserQueryVariables) => variables === undefined ? ['currentUser'] : ['currentUser', variables];
;

export const RefreshTokenDocument = /*#__PURE__*/ `
    mutation RefreshToken($data: RefreshTokenInput!) {
  refreshToken(refreshTokenInput: $data) {
    accessToken
    refreshToken
    user {
      role
      id
    }
  }
}
    `;
export const useRefreshTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RefreshTokenMutation, TError, RefreshTokenMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RefreshTokenMutation, TError, RefreshTokenMutationVariables, TContext>(
      ['RefreshToken'],
      (variables?: RefreshTokenMutationVariables) => fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(client, RefreshTokenDocument, variables, headers)(),
      options
    );
export const CreateCalendarEventMutationDocument = /*#__PURE__*/ `
    mutation createCalendarEventMutation($calendarData: CreateCalendarEventInput!) {
  createCalendarEvent(createCalendarEventInput: $calendarData) {
    description
    endDate
    startDate
  }
}
    `;
export const useCreateCalendarEventMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCalendarEventMutationMutation, TError, CreateCalendarEventMutationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCalendarEventMutationMutation, TError, CreateCalendarEventMutationMutationVariables, TContext>(
      ['createCalendarEventMutation'],
      (variables?: CreateCalendarEventMutationMutationVariables) => fetcher<CreateCalendarEventMutationMutation, CreateCalendarEventMutationMutationVariables>(client, CreateCalendarEventMutationDocument, variables, headers)(),
      options
    );
export const GetCalendarEventsDocument = /*#__PURE__*/ `
    query GetCalendarEvents($limit: Float) {
  calendarevents(limit: $limit) {
    data {
      id
      title
      description
      startDate
      endDate
      recurring
    }
    pageInfo {
      limit
    }
  }
}
    `;
export const useGetCalendarEventsQuery = <
      TData = GetCalendarEventsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCalendarEventsQueryVariables,
      options?: UseQueryOptions<GetCalendarEventsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCalendarEventsQuery, TError, TData>(
      variables === undefined ? ['GetCalendarEvents'] : ['GetCalendarEvents', variables],
      fetcher<GetCalendarEventsQuery, GetCalendarEventsQueryVariables>(client, GetCalendarEventsDocument, variables, headers),
      options
    );

useGetCalendarEventsQuery.getKey = (variables?: GetCalendarEventsQueryVariables) => variables === undefined ? ['GetCalendarEvents'] : ['GetCalendarEvents', variables];
;

export const CreateNewDirectMessageDocument = /*#__PURE__*/ `
    mutation CreateNewDirectMessage($message: CreateMessageInput!) {
  sendMessage(createMessageInput: $message) {
    id
    text
    createdAt
    updatedAt
  }
}
    `;
export const useCreateNewDirectMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateNewDirectMessageMutation, TError, CreateNewDirectMessageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateNewDirectMessageMutation, TError, CreateNewDirectMessageMutationVariables, TContext>(
      ['CreateNewDirectMessage'],
      (variables?: CreateNewDirectMessageMutationVariables) => fetcher<CreateNewDirectMessageMutation, CreateNewDirectMessageMutationVariables>(client, CreateNewDirectMessageDocument, variables, headers)(),
      options
    );
export const GetDirectMessagesDocument = /*#__PURE__*/ `
    query GetDirectMessages($userId: String!) {
  getMessagesBetween(userId: $userId) {
    id
    text
    filePath
    createdAt
    updatedAt
    fromId
    toId
    from {
      id
      lastName
      firstName
      profilePicture
    }
    to {
      id
      firstName
      lastName
      profilePicture
    }
  }
}
    `;
export const useGetDirectMessagesQuery = <
      TData = GetDirectMessagesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetDirectMessagesQueryVariables,
      options?: UseQueryOptions<GetDirectMessagesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetDirectMessagesQuery, TError, TData>(
      ['GetDirectMessages', variables],
      fetcher<GetDirectMessagesQuery, GetDirectMessagesQueryVariables>(client, GetDirectMessagesDocument, variables, headers),
      options
    );

useGetDirectMessagesQuery.getKey = (variables: GetDirectMessagesQueryVariables) => ['GetDirectMessages', variables];
;

export const NewMessageDocument = /*#__PURE__*/ `
    subscription NewMessage {
  messageAdded {
    id
    text
    createdAt
    updatedAt
    to {
      id
      lastName
      firstName
    }
  }
}
    `;
export const CountCoursesInSchoolDocument = /*#__PURE__*/ `
    query CountCoursesInSchool($schoolId: String!) {
  getCountCoursesOfSchool(schoolId: $schoolId)
}
    `;
export const useCountCoursesInSchoolQuery = <
      TData = CountCoursesInSchoolQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CountCoursesInSchoolQueryVariables,
      options?: UseQueryOptions<CountCoursesInSchoolQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CountCoursesInSchoolQuery, TError, TData>(
      ['CountCoursesInSchool', variables],
      fetcher<CountCoursesInSchoolQuery, CountCoursesInSchoolQueryVariables>(client, CountCoursesInSchoolDocument, variables, headers),
      options
    );

useCountCoursesInSchoolQuery.getKey = (variables: CountCoursesInSchoolQueryVariables) => ['CountCoursesInSchool', variables];
;

export const GetDistrictsDocument = /*#__PURE__*/ `
    query getDistricts {
  districts {
    data {
      id
      name
      addressId
      address {
        id
        country
        state
        city
        street
        number
        zipCode
      }
      about
      banner
      createdAt
      updatedAt
      schools {
        id
        name
      }
      users {
        id
        firstName
        lastName
        email
        password
        phone
        birthday
      }
    }
  }
}
    `;
export const useGetDistrictsQuery = <
      TData = GetDistrictsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetDistrictsQueryVariables,
      options?: UseQueryOptions<GetDistrictsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetDistrictsQuery, TError, TData>(
      variables === undefined ? ['getDistricts'] : ['getDistricts', variables],
      fetcher<GetDistrictsQuery, GetDistrictsQueryVariables>(client, GetDistrictsDocument, variables, headers),
      options
    );

useGetDistrictsQuery.getKey = (variables?: GetDistrictsQueryVariables) => variables === undefined ? ['getDistricts'] : ['getDistricts', variables];
;

export const GetSchoolByIdDocument = /*#__PURE__*/ `
    query GetSchoolById($schoolId: String!) {
  school(id: $schoolId) {
    id
    name
    createdAt
    updatedAt
    address {
      id
      zipCode
      country
      city
    }
  }
}
    `;
export const useGetSchoolByIdQuery = <
      TData = GetSchoolByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetSchoolByIdQueryVariables,
      options?: UseQueryOptions<GetSchoolByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSchoolByIdQuery, TError, TData>(
      ['GetSchoolById', variables],
      fetcher<GetSchoolByIdQuery, GetSchoolByIdQueryVariables>(client, GetSchoolByIdDocument, variables, headers),
      options
    );

useGetSchoolByIdQuery.getKey = (variables: GetSchoolByIdQueryVariables) => ['GetSchoolById', variables];
;

export const GetStudentsBySchoolIdDocument = /*#__PURE__*/ `
    query GetStudentsBySchoolId($schoolId: String!) {
  getStudentsBySchoolId(schoolId: $schoolId) {
    data {
      id
      profilePicture
      lastName
      firstName
      schoolId
      birthday
      profilePicture
      pronouns
      email
    }
    pageInfo {
      total
      skip
      limit
    }
  }
}
    `;
export const useGetStudentsBySchoolIdQuery = <
      TData = GetStudentsBySchoolIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetStudentsBySchoolIdQueryVariables,
      options?: UseQueryOptions<GetStudentsBySchoolIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStudentsBySchoolIdQuery, TError, TData>(
      ['GetStudentsBySchoolId', variables],
      fetcher<GetStudentsBySchoolIdQuery, GetStudentsBySchoolIdQueryVariables>(client, GetStudentsBySchoolIdDocument, variables, headers),
      options
    );

useGetStudentsBySchoolIdQuery.getKey = (variables: GetStudentsBySchoolIdQueryVariables) => ['GetStudentsBySchoolId', variables];
;

export const GetStudentCoursesDocument = /*#__PURE__*/ `
    query GetStudentCourses {
  currentUser {
    id
    lastName
    firstName
    studentCourses {
      course {
        id
        name
        courseCode
        picture
        description
        teacher {
          id
          lastName
          firstName
          profilePicture
        }
      }
    }
  }
}
    `;
export const useGetStudentCoursesQuery = <
      TData = GetStudentCoursesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetStudentCoursesQueryVariables,
      options?: UseQueryOptions<GetStudentCoursesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStudentCoursesQuery, TError, TData>(
      variables === undefined ? ['GetStudentCourses'] : ['GetStudentCourses', variables],
      fetcher<GetStudentCoursesQuery, GetStudentCoursesQueryVariables>(client, GetStudentCoursesDocument, variables, headers),
      options
    );

useGetStudentCoursesQuery.getKey = (variables?: GetStudentCoursesQueryVariables) => variables === undefined ? ['GetStudentCourses'] : ['GetStudentCourses', variables];
;

export const GetStudentTotolCompletedAssginementsDocument = /*#__PURE__*/ `
    query GetStudentTotolCompletedAssginements {
  getStudentCompletedAssignments {
    pageInfo {
      total
    }
  }
}
    `;
export const useGetStudentTotolCompletedAssginementsQuery = <
      TData = GetStudentTotolCompletedAssginementsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetStudentTotolCompletedAssginementsQueryVariables,
      options?: UseQueryOptions<GetStudentTotolCompletedAssginementsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStudentTotolCompletedAssginementsQuery, TError, TData>(
      variables === undefined ? ['GetStudentTotolCompletedAssginements'] : ['GetStudentTotolCompletedAssginements', variables],
      fetcher<GetStudentTotolCompletedAssginementsQuery, GetStudentTotolCompletedAssginementsQueryVariables>(client, GetStudentTotolCompletedAssginementsDocument, variables, headers),
      options
    );

useGetStudentTotolCompletedAssginementsQuery.getKey = (variables?: GetStudentTotolCompletedAssginementsQueryVariables) => variables === undefined ? ['GetStudentTotolCompletedAssginements'] : ['GetStudentTotolCompletedAssginements', variables];
;

export const GetStudentTotalOverDueAssignmentsDocument = /*#__PURE__*/ `
    query GetStudentTotalOverDueAssignments {
  getStudentOverDueAssignments {
    pageInfo {
      total
    }
  }
}
    `;
export const useGetStudentTotalOverDueAssignmentsQuery = <
      TData = GetStudentTotalOverDueAssignmentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetStudentTotalOverDueAssignmentsQueryVariables,
      options?: UseQueryOptions<GetStudentTotalOverDueAssignmentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStudentTotalOverDueAssignmentsQuery, TError, TData>(
      variables === undefined ? ['GetStudentTotalOverDueAssignments'] : ['GetStudentTotalOverDueAssignments', variables],
      fetcher<GetStudentTotalOverDueAssignmentsQuery, GetStudentTotalOverDueAssignmentsQueryVariables>(client, GetStudentTotalOverDueAssignmentsDocument, variables, headers),
      options
    );

useGetStudentTotalOverDueAssignmentsQuery.getKey = (variables?: GetStudentTotalOverDueAssignmentsQueryVariables) => variables === undefined ? ['GetStudentTotalOverDueAssignments'] : ['GetStudentTotalOverDueAssignments', variables];
;

export const GetStudentTodoAssignmentsDocument = /*#__PURE__*/ `
    query GetStudentTodoAssignments {
  getStudentTodoAssignments {
    pageInfo {
      total
    }
  }
}
    `;
export const useGetStudentTodoAssignmentsQuery = <
      TData = GetStudentTodoAssignmentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetStudentTodoAssignmentsQueryVariables,
      options?: UseQueryOptions<GetStudentTodoAssignmentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStudentTodoAssignmentsQuery, TError, TData>(
      variables === undefined ? ['GetStudentTodoAssignments'] : ['GetStudentTodoAssignments', variables],
      fetcher<GetStudentTodoAssignmentsQuery, GetStudentTodoAssignmentsQueryVariables>(client, GetStudentTodoAssignmentsDocument, variables, headers),
      options
    );

useGetStudentTodoAssignmentsQuery.getKey = (variables?: GetStudentTodoAssignmentsQueryVariables) => variables === undefined ? ['GetStudentTodoAssignments'] : ['GetStudentTodoAssignments', variables];
;

export const GetStudentAnnouncementsDocument = /*#__PURE__*/ `
    query GetStudentAnnouncements($limit: Float) {
  getAnnouncements(limit: $limit) {
    data {
      id
      type
      title
      description
      createdAt
      updatedAt
    }
    pageInfo {
      total
      skip
    }
  }
}
    `;
export const useGetStudentAnnouncementsQuery = <
      TData = GetStudentAnnouncementsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetStudentAnnouncementsQueryVariables,
      options?: UseQueryOptions<GetStudentAnnouncementsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetStudentAnnouncementsQuery, TError, TData>(
      variables === undefined ? ['GetStudentAnnouncements'] : ['GetStudentAnnouncements', variables],
      fetcher<GetStudentAnnouncementsQuery, GetStudentAnnouncementsQueryVariables>(client, GetStudentAnnouncementsDocument, variables, headers),
      options
    );

useGetStudentAnnouncementsQuery.getKey = (variables?: GetStudentAnnouncementsQueryVariables) => variables === undefined ? ['GetStudentAnnouncements'] : ['GetStudentAnnouncements', variables];
;

export const GetSchoolsDocument = /*#__PURE__*/ `
    query GetSchools($limit: Float) {
  schools(limit: $limit) {
    data {
      id
      name
    }
    pageInfo {
      total
    }
  }
}
    `;
export const useGetSchoolsQuery = <
      TData = GetSchoolsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSchoolsQueryVariables,
      options?: UseQueryOptions<GetSchoolsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSchoolsQuery, TError, TData>(
      variables === undefined ? ['GetSchools'] : ['GetSchools', variables],
      fetcher<GetSchoolsQuery, GetSchoolsQueryVariables>(client, GetSchoolsDocument, variables, headers),
      options
    );

useGetSchoolsQuery.getKey = (variables?: GetSchoolsQueryVariables) => variables === undefined ? ['GetSchools'] : ['GetSchools', variables];
;

export const CountStudentsInSchoolDocument = /*#__PURE__*/ `
    query CountStudentsInSchool($schoolId: String!) {
  countStudentsInSchool(schoolId: $schoolId)
}
    `;
export const useCountStudentsInSchoolQuery = <
      TData = CountStudentsInSchoolQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CountStudentsInSchoolQueryVariables,
      options?: UseQueryOptions<CountStudentsInSchoolQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CountStudentsInSchoolQuery, TError, TData>(
      ['CountStudentsInSchool', variables],
      fetcher<CountStudentsInSchoolQuery, CountStudentsInSchoolQueryVariables>(client, CountStudentsInSchoolDocument, variables, headers),
      options
    );

useCountStudentsInSchoolQuery.getKey = (variables: CountStudentsInSchoolQueryVariables) => ['CountStudentsInSchool', variables];
;

export const GetCoursesByTeacherDocument = /*#__PURE__*/ `
    query GetCoursesByTeacher {
  courses {
    pageInfo {
      total
      limit
    }
    data {
      id
      name
      courseCode
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const useGetCoursesByTeacherQuery = <
      TData = GetCoursesByTeacherQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCoursesByTeacherQueryVariables,
      options?: UseQueryOptions<GetCoursesByTeacherQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCoursesByTeacherQuery, TError, TData>(
      variables === undefined ? ['GetCoursesByTeacher'] : ['GetCoursesByTeacher', variables],
      fetcher<GetCoursesByTeacherQuery, GetCoursesByTeacherQueryVariables>(client, GetCoursesByTeacherDocument, variables, headers),
      options
    );

useGetCoursesByTeacherQuery.getKey = (variables?: GetCoursesByTeacherQueryVariables) => variables === undefined ? ['GetCoursesByTeacher'] : ['GetCoursesByTeacher', variables];
;

export const CountTeachersInSchoolDocument = /*#__PURE__*/ `
    query CountTeachersInSchool($schoolId: String!) {
  countTeachersInSchool(schoolId: $schoolId)
}
    `;
export const useCountTeachersInSchoolQuery = <
      TData = CountTeachersInSchoolQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CountTeachersInSchoolQueryVariables,
      options?: UseQueryOptions<CountTeachersInSchoolQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CountTeachersInSchoolQuery, TError, TData>(
      ['CountTeachersInSchool', variables],
      fetcher<CountTeachersInSchoolQuery, CountTeachersInSchoolQueryVariables>(client, CountTeachersInSchoolDocument, variables, headers),
      options
    );

useCountTeachersInSchoolQuery.getKey = (variables: CountTeachersInSchoolQueryVariables) => ['CountTeachersInSchool', variables];
;

export const UpdateAnyUserDocument = /*#__PURE__*/ `
    mutation updateAnyUser($userData: UpdateUserInput!) {
  updateAnyUser(updateUser: $userData) {
    id
    firstName
    lastName
    phone
    bio
    pronouns
    profileAvailability
  }
}
    `;
export const useUpdateAnyUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateAnyUserMutation, TError, UpdateAnyUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateAnyUserMutation, TError, UpdateAnyUserMutationVariables, TContext>(
      ['updateAnyUser'],
      (variables?: UpdateAnyUserMutationVariables) => fetcher<UpdateAnyUserMutation, UpdateAnyUserMutationVariables>(client, UpdateAnyUserDocument, variables, headers)(),
      options
    );
export const GetUserByIdDocument = /*#__PURE__*/ `
    query getUserById($id: String!) {
  getUserById(id: $id) {
    id
    lastName
    firstName
    phone
    bio
    email
    pronouns
    role
    birthday
    bannerPicture
    profileAvailability
  }
}
    `;
export const useGetUserByIdQuery = <
      TData = GetUserByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserByIdQueryVariables,
      options?: UseQueryOptions<GetUserByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserByIdQuery, TError, TData>(
      ['getUserById', variables],
      fetcher<GetUserByIdQuery, GetUserByIdQueryVariables>(client, GetUserByIdDocument, variables, headers),
      options
    );

useGetUserByIdQuery.getKey = (variables: GetUserByIdQueryVariables) => ['getUserById', variables];
;

export const GetUsersByRoleDocument = /*#__PURE__*/ `
    query GetUsersByRole($role: String!) {
  getUsersByRole(role: $role) {
    data {
      id
      firstName
      lastName
    }
    pageInfo {
      total
    }
  }
}
    `;
export const useGetUsersByRoleQuery = <
      TData = GetUsersByRoleQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUsersByRoleQueryVariables,
      options?: UseQueryOptions<GetUsersByRoleQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUsersByRoleQuery, TError, TData>(
      ['GetUsersByRole', variables],
      fetcher<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>(client, GetUsersByRoleDocument, variables, headers),
      options
    );

useGetUsersByRoleQuery.getKey = (variables: GetUsersByRoleQueryVariables) => ['GetUsersByRole', variables];
;

export const GetChatUsersDocument = /*#__PURE__*/ `
    query GetChatUsers {
  getAllPublicUsers {
    data {
      id
      email
      lastName
      firstName
    }
    pageInfo {
      total
    }
  }
}
    `;
export const useGetChatUsersQuery = <
      TData = GetChatUsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetChatUsersQueryVariables,
      options?: UseQueryOptions<GetChatUsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatUsersQuery, TError, TData>(
      variables === undefined ? ['GetChatUsers'] : ['GetChatUsers', variables],
      fetcher<GetChatUsersQuery, GetChatUsersQueryVariables>(client, GetChatUsersDocument, variables, headers),
      options
    );

useGetChatUsersQuery.getKey = (variables?: GetChatUsersQueryVariables) => variables === undefined ? ['GetChatUsers'] : ['GetChatUsers', variables];
;

export const GetChatUserDocument = /*#__PURE__*/ `
    query GetChatUser($id: String!) {
  getPublicUserById(id: $id) {
    id
    firstName
    lastName
    email
  }
}
    `;
export const useGetChatUserQuery = <
      TData = GetChatUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetChatUserQueryVariables,
      options?: UseQueryOptions<GetChatUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatUserQuery, TError, TData>(
      ['GetChatUser', variables],
      fetcher<GetChatUserQuery, GetChatUserQueryVariables>(client, GetChatUserDocument, variables, headers),
      options
    );

useGetChatUserQuery.getKey = (variables: GetChatUserQueryVariables) => ['GetChatUser', variables];
;
