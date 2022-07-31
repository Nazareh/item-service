import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Module } from '@nestjs/common';
import { Item } from './item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemProfile } from './item.profile';

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemController],
    providers: [ItemService,ItemProfile],
})
export class ItemModule { }
