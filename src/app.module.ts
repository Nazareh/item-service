import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './health/health.module';
import { ItemModule } from './item/item.module';
import { ItemController } from './item/item.controller';
import { HealthController } from './health/health.controller';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  imports: [HealthModule, ItemModule,       
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
  }),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema: true
 }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}