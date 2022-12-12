import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { Bucket } from '../entities/bucket.entity';

@EntityRepository()
export class BucketRepository extends Repository<Bucket> {}
