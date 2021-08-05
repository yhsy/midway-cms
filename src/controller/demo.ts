/*
 * @Author: your name
 * @Date: 2021-08-05 09:00:41
 * @LastEditTime: 2021-08-05 09:23:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\controller\user.ts
 */
import { Controller,Provide,Get,Query, } from "@midwayjs/decorator";

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
}