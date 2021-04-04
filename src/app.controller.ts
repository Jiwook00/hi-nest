import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}

// controller는 express.js 의 controlloer/router 같은 느낌 ex) app.get ~~~
// url을 가저와서 함수호 매핑, 그럼 hello가 sayHello 함수를 실행한다.
