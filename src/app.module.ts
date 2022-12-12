import { Bucket } from './bucket/entities/bucket.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucketController } from './bucket/bucket.controller';
import { BucketService } from './bucket/bucket.service';
import { BucketModule } from './bucket/bucket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './common/config/typeorm.config';

console.log(__dirname);
@Module({
  imports: [BucketModule, TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
