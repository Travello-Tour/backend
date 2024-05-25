import { Test, TestingModule } from '@nestjs/testing';
import { AccommodationTypesController } from './accommodation-types.controller';

describe('AccommodationTypesController', () => {
  let controller: AccommodationTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccommodationTypesController],
    }).compile();

    controller = module.get<AccommodationTypesController>(
      AccommodationTypesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
