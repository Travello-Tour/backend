/* eslint-disable strict-mode */
import { Controller, Get } from '@nestjs/common';
import { ThematicService } from './thematic.service';

@Controller('thematic')
export class ThematicController {
  constructor(private readonly thematicService: ThematicService) {}

  @Get()
  async getData() {
    return await this.thematicService.getApiData();
  }
}
