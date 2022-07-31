import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ItemDto } from './itemDto';
import { Item, Status } from './item.entity';

@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(Item) private itemRepository: Repository<Item>,
        @InjectMapper() private readonly classMapper: Mapper,
    ) { }

    async getAll(): Promise<ItemDto[]> {
        return this.classMapper.mapArrayAsync(
            await this.itemRepository.find(), Item, ItemDto);
    }

    async getById(id: string): Promise<ItemDto> {
        return this.classMapper.mapAsync(
            await this.itemRepository.findOneBy({ id }), Item, ItemDto);
    }

    async add(itemDto: ItemDto): Promise<ItemDto> {
        const entity = this.classMapper.map(itemDto, ItemDto, Item);
        entity.status = Status.TODO;
        entity.createdAt = new Date();
        return this.classMapper.mapAsync(
            await this.itemRepository.save(entity), Item, ItemDto);
    }

    async update(id :string, itemDto: ItemDto): Promise<ItemDto> {
        let entity = await this.itemRepository.findOneBy({ id });

        entity.description = itemDto.description;
        entity.status = itemDto.status;
        entity.updatedAt = new Date();
                    
        return this.classMapper.mapAsync(
            await this.itemRepository.save(entity), Item, ItemDto);
    }

    delete(id: string): void {
        this.itemRepository.delete({id});
    }

}
