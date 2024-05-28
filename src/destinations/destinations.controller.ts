import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DestinationsService } from './destinations.service';

@ApiTags('API')
@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  async getData(@Query('page') page?: number, @Query('limit') limit?: number) {
    return await this.destinationsService.getApiData(page, limit);
  }
}
