/*
 * @Author: your name
 * @Date: 2021-08-03 09:20:07
 * @LastEditTime: 2021-08-10 09:22:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\service\user.ts
 */
import { Provide } from '@midwayjs/decorator';
import { IUserOptions,IUserIdOptions } from '../interface';

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
  async getUserInfo(options:IUserIdOptions){
    return {
      id: Number(options.id),
      name:'Harry',
      age:18,
    }
  }
}