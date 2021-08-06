/*
 * @Author: your name
 * @Date: 2021-08-05 09:00:41
 * @LastEditTime: 2021-08-06 09:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\controller\user.ts
 */
import { Controller,Provide,Get, Post,Query, ALL,  Body } from "@midwayjs/decorator";

@Provide()
@Controller('/api/demo')
export class DemoController{
    @Get('/')
    async getDemoQuery(@Query()id){
        return {
            code: 1000,
            success: true,
            message:'查询成功', 
            data:{id} // 返回id
        }
    }
    
    @Get('/uid')
    async getDemoQueryUid(@Query('userId')uid){
        return {
            code: 1000,
            success: true,
            message:'查询成功', 
            data:{uid:Number(uid)} // 返回用户id
        }
    }

    @Get('/info')
    async getDemoQueryInfo(@Query(ALL) queryObject: object){
        return {
            code: 1000,
            success: true,
            message:'查询成功', 
            data:{queryObject} // 返回用户信息
        }
    }

    @Post('/body')
    async getDemoBody(@Body()bid){
        // 注意：客户端的Body类型：type: application/x-www-form-urlencoded
        return {
            code: 1000,
            success: true,
            message:'查询成功', 
            data:{ bid } // 返回bid
        }
    }
}