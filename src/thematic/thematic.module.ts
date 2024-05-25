import { Module } from '@nestjs/common';
import { ThematicController } from './thematic.controller';
import { ThematicService } from './thematic.service';
@Module({
  controllers: [ThematicController],
  providers: [ThematicService],
})
export class ThematicModule {}
