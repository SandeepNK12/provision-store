import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async findAll(): Promise<Store[]> {
    return this.storeRepository.find({
      where: {
        is_deleted: 0,
      },
    });
  }

  async findOne(id: number): Promise<Store | null> {
    return this.storeRepository.findOne({
      where: {
        id,
        is_deleted: 0,
      },
    });
  }
}