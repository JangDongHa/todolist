import { UpdateBucketStateDto } from './dto/bucket/updateBucketStateDto';
import { map } from 'rxjs/operators';
import { BucketDto } from './dto/bucket/bucketDto';
import { BucketRepository } from './repositories/bucket.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Bucket } from './entities/bucket.entity';

@Injectable()
export class BucketService {
  constructor(
    @InjectRepository(Bucket)
    private bucketRepository: Repository<Bucket>,
  ) {}

  public addBucket(content: string) {
    const bucket = new Bucket();
    bucket.content = content;

    const bucketPS = this.bucketRepository.create(bucket);

    return this.bucketRepository.save(bucketPS);
  }

  public async findAllBuckets(): Promise<BucketDto[]> {
    const bucketsPS = this.bucketRepository.find();

    return (await bucketsPS).map((bucket) => new BucketDto(bucket));
  }

  public modifyBucketState(
    updateBucketStateDto: UpdateBucketStateDto,
  ): Promise<any> {
    return this.bucketRepository.update(
      updateBucketStateDto.id,
      updateBucketStateDto,
    );
  }
}
