/*
 * @Author: your name
 * @Date: 2021-08-05 09:00:41
 * @LastEditTime: 2021-08-09 09:21:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\controller\user.ts
 */
import { Controller,Provide,Get, Post,Query, ALL,  Body,Param, RequestPath, RequestIP,HttpCode,SetHeader, Redirect  } from "@midwayjs/decorator";

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

    // 获取query对象
    @Get('/info')
    async getDemoQueryInfo(@Query(ALL) queryObject: object){
        return {
            code: 1000,
            success: true,
            message:'查询成功', 
            data:{queryObject} // 返回用户信息
        }
    }

    // 获取单个 body 参数
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

    // 获取 param 参数
    @Get('/param/:uid')
    async getDemoParam(@Param()uid){
       // uid 从路由参数中获取
        return {
            code: 1000,
            success: true,
            message:'查询成功', 
            data:{ uid } // 返回uid
        }
    }

    // 获取path
    @Post('/path')
    async getDemoPath(@RequestPath()path){
        // 获取接口路径地址
         return {
             code: 1000,
             success: true,
             message:'查询成功', 
             data:{ path } // 返回path
         }
     }

    // 获取ip地址
    @Post('/ip')
    async getDemoIp(@RequestIP()ip){
        // console.log(`ip:${ip}`)
        // 获取ip地址
         return {
             code: 1000,
             success: true,
             message:'查询成功', 
             data:{ ip } // 返回ip
         }
     }

    @Get('/HttpCode')
    // 修改状态码为201
    @HttpCode(201)
    async getHttpCode() {
        return "Hello HttpCode 201!";
        //    return {
        //         code: 201,
        //         success: true,
        //         message:'Hello HttpCode 201!', 
        //         data:{}
        //     }
    }

    @Get('/header')
    // 修改响应头
    @SetHeader({
      'x-bbb': '123',
      'x-ccc': '234'
    })
    async getHeader() {
        return "Hello SetHeader Content!!";
    }

    @Get('/abc')
    // 重定向
    @Redirect('/params/abc')
    async getAbc(){
        return 'Hello Redirect'
    }
}