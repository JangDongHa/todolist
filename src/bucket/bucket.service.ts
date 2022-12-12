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

  public test() {
    const bucket = new Bucket();
    bucket.content = 'test';

    const persBucket = this.bucketRepository.create({ content: 'test' });

    return this.bucketRepository.save(persBucket);
  }
}
