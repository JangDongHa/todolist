import { BucketRepository } from './repositories/bucket.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BucketService } from './bucket.service';
import { BucketController } from './bucket.controller';
import { Module } from '@nestjs/common';
import { Bucket } from './entities/bucket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bucket])],
  controllers: [BucketController],
  providers: [BucketService],
  exports: [BucketService],
})
export class BucketModule {}
