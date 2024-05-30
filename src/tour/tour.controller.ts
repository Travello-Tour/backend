import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TourService } from './tour.service';
@ApiTags('API')
@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Получить информация о туре' })
  getTourById(@Param('id') id: number) {
    return this.tourService.getApiData(id);
  }
}
