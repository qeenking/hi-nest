import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

//controller 안의 'movie'도 router역할을 한다. /movies로 접근해야 실행됨
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesSesrvice: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesSesrvice.getAll();
  }
  //Get(search)가 Get(/:id)보다 아래에 있으면, search를 문자형 id로 처리한다. 그래서 id보다 위에 둬야 함
  //@Query는 괄호 안의 값을 url에서 가져온다.
  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for a moive made after: ${searchingYear}`;
  //   }
  //@Param()을 이용해서 url에 들어있는 정보를 가져올 수 있다.
  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);

    return this.moviesSesrvice.getOne(movieId);
  }
  //@Body는 들어온 요청의 body에 담겨있는 정보를 사용할 수 있게 한다.
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesSesrvice.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesSesrvice.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesSesrvice.update(movieId, updateData);
  }
}
