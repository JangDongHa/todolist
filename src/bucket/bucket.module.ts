import { BucketService } from './bucket.service';
import { BucketController } from './bucket.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BucketController],
  providers: [BucketService],
  exports: [BucketService],
})
export class BucketModule {}
