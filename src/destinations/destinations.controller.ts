import { Controller, Get, Query } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  async getData(@Query('page') page?: number, @Query('limit') limit?: number) {
    return await this.destinationsService.getApiData(page, limit);
  }
}
