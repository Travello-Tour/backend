import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VariablesService } from './variables.service';

@ApiTags('API')
@Controller('variables')
export class VariablesController {
  constructor(private readonly variablesService: VariablesService) {}

  @Get()
  async getData(@Query('page') page?: number, @Query('limit') limit?: number) {
    return await this.variablesService.getApiData(page, limit);
  }
}
