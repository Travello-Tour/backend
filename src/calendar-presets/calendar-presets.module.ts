import { Module } from '@nestjs/common';
import { CalendarPresetsController } from './calendar-presets.controller';
import { CalendarPresetsService } from './calendar-presets.service';

@Module({
  providers: [CalendarPresetsService],
  controllers: [CalendarPresetsController],
})
export class CalendarPresetsModule {}
