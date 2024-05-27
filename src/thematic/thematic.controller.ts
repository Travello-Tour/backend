/* eslint-disable strict-mode */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ThematicService } from './thematic.service';
@ApiTags('API')
@Controller('thematic')
export class ThematicController {
  constructor(private readonly thematicService: ThematicService) {}

  @Get()
  async getData() {
    return await this.thematicService.getApiData();
  }
}
