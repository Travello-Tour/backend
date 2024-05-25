import { Test, TestingModule } from '@nestjs/testing';
import { CalendarPresetsController } from './calendar-presets.controller';

describe('CalendarPresetsController', () => {
  let controller: CalendarPresetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarPresetsController],
    }).compile();

    controller = module.get<CalendarPresetsController>(
      CalendarPresetsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
