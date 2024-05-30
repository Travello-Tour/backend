import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CalendarPresetsService } from './calendar-presets.service';

@ApiTags('API')
@Controller('calendar-presets')
export class CalendarPresetsController {
  constructor(
    private readonly calendarPresetsService: CalendarPresetsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Календарный пресет' })
  getData() {
    return this.calendarPresetsService.getApiData();
  }
}
