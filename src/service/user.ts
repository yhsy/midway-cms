/*
 * @Author: your name
 * @Date: 2021-08-03 09:20:07
 * @LastEditTime: 2021-08-11 17:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\service\user.ts
 */
import { Provide } from '@midwayjs/decorator';
import { IUserOptions, IUserIdOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
  // 通过id查询-用户信息
  async getUserInfo(options: IUserIdOptions) {
    return {
      id: Number(options.id),
      name: 'Harry',
      age: 18,
    };
  }
  // 添加用户
  async addUser(obj) {
    // console.log(`obj:${JSON.stringify(obj)}`)
    console.log(obj.nickname.length)
    // const randomNum = Math.floor(Math.random() * 10);
    if ((obj.nickname.length % 2) !== 0) {
    // if (randomNum % 2 === 0) {
      // 成功
      return {
        code: 1000,
        success: true,
        message: 'OK',
        data: {},
      };
    } else {
      // 失败
      return {
        code: 1003,
        success: true,
        message: '操作失败,用户名重复',
        data: {},
      };
    }
  }
}
