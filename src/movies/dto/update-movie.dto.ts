//npm i class-validator를 통해 설치, 각 타입의 유효성을 검사해줌
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//수용할 자료의 형식을 작성
//PartialType()은 입력 유형의 모든 속성을 필수입력이 아닌 선택사항으로 바꿔서 상속받게 한다.
//덕분에 일일히 똑같이 붙여넣고 title?: string과 같이 적지 않아도 됨
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
