import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { ItemDto } from './itemDto';

describe('ItemController', () => {
  let itemController: ItemController;
  let itemService: ItemService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ItemService,
      useFactory: () => ({
        getAll: jest.fn(() => [new ItemDto("task-1"), new ItemDto("task-2")]),
        getById: jest.fn(() => { }),
        add: jest.fn(() => { }),
        update: jest.fn(() => { }),
        delete: jest.fn(() => { }),
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [ItemService, ApiServiceProvider],
    }).compile();

    itemController = app.get<ItemController>(ItemController);
    itemService = app.get<ItemService>(ItemService);
  });

  it('getAll', async () => {
    await itemController.getItems();
    expect(itemService.getAll).toHaveBeenCalled();
  });

  it('getItem', async () => {
    await itemController.getItem('1234');
    expect(itemService.getById).toHaveBeenCalledWith('1234');

  });

  it('addItem', async () => {
    let newItem: ItemDto = new ItemDto("todo-1");
    await itemController.addItem(newItem);
    expect(itemService.add).toHaveBeenCalledWith(newItem);
  });

  it('update', async () => {
    let itemToBeUpdated: ItemDto = new ItemDto("todo-1");
    await itemController.updateItem('itemId', itemToBeUpdated);
    expect(itemService.update).toHaveBeenCalledWith('itemId', itemToBeUpdated);
  });

  it('delete', async () => {
    let itemId: string = 'itemId';
    await itemController.deleteItem(itemId);
    expect(itemService.delete).toHaveBeenCalledWith(itemId);
  });
});
