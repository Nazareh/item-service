import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { AutoMap } from "@automapper/classes";

export enum Status {
    TODO = 'TODO',
    DOING = 'DOING',
    DONE = 'DONE',
  }

@Entity()
export class Item{
    @PrimaryGeneratedColumn("uuid")
    @AutoMap()
    id: string;
    
    @Column()
    @AutoMap()
    description: string;
    
    @Column({ default: Status.TODO })
    @AutoMap()   
    status: Status;

    @CreateDateColumn()
    createdAt : Date;
 
    @UpdateDateColumn()
    updatedAt : Date;
}


