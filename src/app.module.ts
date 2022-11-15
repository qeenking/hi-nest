import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

//데코레이터, 클래스에 함수를 넣을 수 있게 한다. 클래스와 바로 붙어있어야 함
//모듈은 분리해놓는것이 가장 좋음. app.module에는 app.controller나 app.servies외엔 없도록.
//다른 모듈을 imports로 불러오는 형태가 이상적임.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
