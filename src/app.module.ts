import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucketController } from './bucket/bucket.controller';
import { BucketService } from './bucket/bucket.service';
import { BucketModule } from './bucket/bucket.module';

@Module({
  imports: [BucketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
