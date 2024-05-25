import { Controller, Get } from '@nestjs/common';
import { AccommodationTypesService } from './accommodation-types.service';
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
