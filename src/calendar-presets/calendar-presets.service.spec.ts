import { Test, TestingModule } from '@nestjs/testing';
import { CalendarPresetsService } from './calendar-presets.service';

describe('CalendarPresetsService', () => {
  let service: CalendarPresetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarPresetsService],
    }).compile();

    service = module.get<CalendarPresetsService>(CalendarPresetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
