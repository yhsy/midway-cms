/*
 * @Author: your name
 * @Date: 2021-08-10 08:46:09
 * @LastEditTime: 2021-08-11 17:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\controller\user.ts
 */

import { Provide,Controller,Inject,Get,Query,Post,Body,ALL, } from "@midwayjs/decorator";
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
    
    @Post('/add')
    async addUser(@Body(ALL) obj){
        // console.log(`obj:${JSON.stringify(obj)}`)
        /*
            1.获取请求参数
            2.校验参数,通过(下一步),未通过(返回错误提示)
            3.通过Service层把数据插入到数据库,插入成功(返回正确提示),插入失败(返回错误提示)
        */ 
        const addUser = await this.userService.addUser(obj);
        return addUser;
    }
}