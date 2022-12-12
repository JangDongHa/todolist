import { Bucket } from './../../entities/bucket.entity';
import { IsBoolean, IsInt } from 'class-validator';

export class UpdateBucketStateDto {
  @IsInt()
  public id: number;

  @IsBoolean()
  public isComplete: boolean;

  //*TODO service에서 해당 메서드 사용 불가 이유 알기
  public toBucketDto(): Bucket {
    const bucket = new Bucket();
    bucket.id = this.id;
    bucket.isComplete = this.isComplete;
    return bucket;
  }
}
