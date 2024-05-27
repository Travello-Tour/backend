import { Controller, Get, Param } from '@nestjs/common';
import { TourService } from './tour.service';
@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get(':id')
  getTourById(@Param('id') id: number) {
    return this.tourService.getApiData(id);
  }
}
