import { AutoMap } from "@automapper/classes";

export class ItemDto {
    constructor( description: string){
        this.description = description;
    }

    @AutoMap()
    id: string;
    
    @AutoMap()
    description: string;
    
    @AutoMap()
    status: Status = Status.TODO;
}

export enum Status {
    TODO = 'TODO',
    DOING = 'DOING',
    DONE = 'DONE',
  }