import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './modules/pets/pets.module';
import * as config from '../ormconfig.js';

@Module({
  imports: [TypeOrmModule.forRoot(config), PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
