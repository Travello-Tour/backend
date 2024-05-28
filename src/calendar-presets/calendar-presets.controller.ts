import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalendarPresetsService } from './calendar-presets.service';

@ApiTags('API')
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
