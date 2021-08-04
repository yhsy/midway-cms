/*
 * @Author: your name
 * @Date: 2021-08-03 09:20:07
 * @LastEditTime: 2021-08-04 09:51:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \midway-cms\src\controller\home.ts
 */
import { Controller, Get, Provide, Post } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  // Get请求
  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }

  // Get请求
  @Get('/get')
  async getData() {
    return 'This is a Get method!';
  }

  // Post请求
  @Post('/post')
  async postData() {
    // return 'This is a post method'
    return {
      code: 1000, // 业务状态码先暂定10000为成功
      success: true, // true | false, boolean是否成功
      message:'操作成功',  // 不同的业务提示信息
      data:{} // 此处是业务数据,类型Object | Array | null
    }
  }
}
