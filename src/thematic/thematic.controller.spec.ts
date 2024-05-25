import { Test, TestingModule } from '@nestjs/testing';
import { ThematicController } from './thematic.controller';

describe('ThematicController', () => {
  let controller: ThematicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThematicController],
    }).compile();

    controller = module.get<ThematicController>(ThematicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
