/*
 * @Author: your name
 * @Date: 2021-08-10 08:46:09
 * @LastEditTime: 2021-08-10 09:21:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\controller\user.ts
 */

import { Provide,Controller,Inject,Get,Query, } from "@midwayjs/decorator";
import {Context} from 'egg';
import { IGetUserInfoResponse } from "../interface";
import { UserService } from "../service/user";

@Provide()
@Controller('/api/user')
export class UserController {
    @Inject()
    ctx:Context;

    @Inject()
    userService:UserService;

    @Get('/info')
    async getUserInfo(@Query() id:number): Promise<IGetUserInfoResponse> {
        const user = await this.userService.getUserInfo({ id });
        return { 
            success: true, 
            message: 'OK', 
            data: user
        };
    }
}