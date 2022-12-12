import { UpdateBucketStateDto } from './dto/bucket/updateBucketStateDto';
import { MaxLenStringPipe } from './../common/pipes/maxlen.string.pipe';
import { BucketService } from './bucket.service';
import { Controller } from '@nestjs/common';
import {
  Get,
  Post,
  Delete,
  Put,
  Patch,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param, HttpException, UseInterceptors } from '@nestjs/common';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Get()
  public readBuckets() {
    return this.bucketService.findAllBuckets();
  }

  @Post()
  public createBucket(@Body('bucket', MaxLenStringPipe) Body) {
    return this.bucketService.addBucket(Body);
  }

  @Delete()
  public deleteBucket() {
    return 'delete bucket';
  }

  @Patch()
  public updateBucket(@Body() data: UpdateBucketStateDto) {
    console.log('test');
    console.log(data);
    return this.bucketService.modifyBucketState(data);
  }
}
