import { Bucket } from './../../entities/bucket.entity';
import { IsBoolean, IsInt } from 'class-validator';

export class UpdateBucketStateDto {
  @IsInt()
  public id: number;

  @IsBoolean()
  public isComplete: boolean;

  public toBucketDto(): Bucket {
    const bucket = new Bucket();
    bucket.id = this.id;
    bucket.isComplete = this.isComplete;
    return bucket;
  }
}
