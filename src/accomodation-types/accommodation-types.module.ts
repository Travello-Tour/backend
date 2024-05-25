import { Module } from '@nestjs/common';
import { AccommodationTypesController } from './accommodation-types.controller';
import { AccommodationTypesService } from './accommodation-types.service';

@Module({
  providers: [AccommodationTypesService],
  controllers: [AccommodationTypesController],
})
export class AccommodationTypesModule {}
