import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { EnvConfiguration } from './config/configuration'

import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [EnvConfiguration] }),
    CarsModule,
    BrandsModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
