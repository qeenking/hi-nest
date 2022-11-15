import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

//providers에 MovieService를 입력한 덕분에, controller에 MoviesService가 주입된 것이다.
//그래서 contrller에서 타입을 지정하는 것만으로, 함수를 불러와서 사용할 수 있는 것임
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
