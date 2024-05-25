import { Module } from '@nestjs/common';
import { AccommodationTypesModule } from './accomodation-types/accommodation-types.module';
import { CalendarPresetsModule } from './calendar-presets/calendar-presets.module';
import { ThematicModule } from './thematic/thematic.module';
import { TourModule } from './tour/tour.module';
import { VariablesModule } from './variables/variables.module';

@Module({
  imports: [
    VariablesModule,
    ThematicModule,
    CalendarPresetsModule,
    TourModule,
    AccommodationTypesModule,
  ],
})
export class AppModule {}
