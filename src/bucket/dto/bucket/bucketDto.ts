import { Bucket } from './../../entities/bucket.entity';
export class BucketDto {
  public id: number;
  public content: string;
  public isComplete: boolean;
  public createdAt: Date;

  constructor(bucket: Bucket) {
    this.id = bucket.id;
    this.content = bucket.content;
    this.isComplete = bucket.isComplete;
    this.createdAt = bucket.createdAt;
  }
}
