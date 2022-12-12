import { MaxLenStringPipe } from './../common/pipes/maxlen.string.pipe';
import { BucketService } from './bucket.service';
import { Controller } from '@nestjs/common';
import {
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param, HttpException, UseInterceptors } from '@nestjs/common';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Get()
  public readBuckets() {
    return 'ok';
  }

  @Post()
  public createBucket(@Body('bucket', MaxLenStringPipe) Body) {
    console.log(Body);
    return 'ok2';
  }

  @Delete()
  public deleteBucket() {
    return 'delete bucket';
  }

  @Put()
  public updateBucket() {
    return 'update bucket';
  }
}
