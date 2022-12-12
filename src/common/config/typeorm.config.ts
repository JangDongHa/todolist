import { Bucket } from './../../bucket/entities/bucket.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'bucket',
  entities: [Bucket],
  synchronize: true,
};
