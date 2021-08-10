/*
 * @Author: your name
 * @Date: 2021-08-03 09:20:07
 * @LastEditTime: 2021-08-10 09:12:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\interface.ts
 */
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface IUserIdOptions {
  id: number;
}
export interface IGetUserInfoResponse {
  success: boolean;
  message: string;
  data: IUserIdOptions;
}
