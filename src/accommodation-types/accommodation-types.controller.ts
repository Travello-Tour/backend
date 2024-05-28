import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccommodationTypesService } from './accommodation-types.service';

@ApiTags('API')
@Controller('accommodation-types')
export class AccommodationTypesController {
  constructor(
    private readonly accommodationTypesService: AccommodationTypesService,
  ) {}

  @Get()
  async getApiData() {
    return await this.accommodationTypesService.getApiData();
  }
}
