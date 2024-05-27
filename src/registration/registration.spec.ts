import { Test, TestingModule } from '@nestjs/testing';
import { Registration } from './registration';

describe('Registration', () => {
  let provider: Registration;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Registration],
    }).compile();

    provider = module.get<Registration>(Registration);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
