import { Controller, Get, Post, Delete, Body, Param, Put, HttpCode } from '@nestjs/common';
import { ItemDto } from './itemDto';
import { ItemService } from './item.service';

@Controller()
export class ItemController {
    constructor(private readonly itemService: ItemService) {

    }

    @Get('items')
    getItems(): Promise<ItemDto[]> {
        return this.itemService.getAll();
    }

    @Get('items/:id')
    getItem(@Param('id') id: string): Promise<ItemDto> {
        return this.itemService.getById(id);
    }

    @Post('items')
    addItem(@Body() itemDto: ItemDto) : Promise<ItemDto> {
        return this.itemService.add(itemDto);
    }

    @Put('items/:id')
    updateItem(@Param('id') id: string, @Body() itemDto: ItemDto): Promise<ItemDto> {
        return this.itemService.update(id, itemDto);
    }

    @Delete('items/:id')
    @HttpCode(204)
    deleteItem(@Param('id') id: string): void{
      this.itemService.delete(id);
    }

}
