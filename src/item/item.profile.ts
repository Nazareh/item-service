import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { Item } from "./item.entity";
import { ItemDto } from "./itemDto";


@Injectable()
export class ItemProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Item, ItemDto);
      createMap(mapper, ItemDto, Item, forMember((dest) => dest.id, ignore()));
    };
  }
}