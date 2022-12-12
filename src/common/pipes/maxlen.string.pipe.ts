import { Injectable, PipeTransform, HttpException } from '@nestjs/common';

function lengthValidate(
  value: string,
  lowLen: number = 0,
  maxLen: number = 60,
): boolean {
  return value.length > lowLen && value.length < maxLen;
}

@Injectable()
export class MaxLenStringPipe implements PipeTransform {
  transform(value: string) {
    if (!lengthValidate(value)) {
      throw new HttpException(
        'bucket content is lower then lowLen or higher then maxLen',
        401,
      );
    }
    return value;
  }
}
