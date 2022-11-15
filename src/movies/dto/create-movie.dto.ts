//npm i class-validator를 통해 설치, 각 타입의 유효성을 검사해줌
import { IsString, IsNumber, IsOptional } from 'class-validator';

//수용할 자료의 형식을 작성
export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional() //선택사항으로 설정
  @IsString({ each: true }) //array로 받을 것이기 때문에, 각각에 대해 검사 옵션
  readonly genres: string[];
}
