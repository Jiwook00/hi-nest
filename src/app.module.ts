import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

//  데코레이터
@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
// 앱 모듈은, 모든 것의 루트 모듈 같은
// 모듈 : 어플리케이션의 일부분
