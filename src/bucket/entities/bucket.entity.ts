import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Bucket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60, comment: 'bucket content' })
  content: string;

  @Column({ default: false })
  isComplete: boolean;

  @CreateDateColumn({ name: 'created_at', comment: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at', comment: 'modifiedAt' })
  modifiedAt: Date;
}
