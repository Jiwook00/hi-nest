import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

//  데코레이터
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
// 앱 모듈은, 모든 것의 루트 모듈 같은
// 모듈 : 어플리케이션의 일부분
