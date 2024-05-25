import { Controller, Get } from '@nestjs/common';
import { CalendarPresetsService } from './calendar-presets.service';
@Controller('calendar-presets')
export class CalendarPresetsController {
  constructor(
    private readonly calendarPresetsService: CalendarPresetsService,
  ) {}

  @Get()
  getData() {
    return this.calendarPresetsService.getApiData();
  }
}
