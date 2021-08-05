/*
 * @Author: your name
 * @Date: 2021-08-05 09:00:41
 * @LastEditTime: 2021-08-05 09:15:24
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
            data:{id: id} // 返回用户id
        }
    }
}