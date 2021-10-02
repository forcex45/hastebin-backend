import { Test, TestingModule } from '@nestjs/testing';
import { PasteService } from './paste.service';

describe('PasteService', () => {
  let service: PasteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasteService],
    }).compile();

    service = module.get<PasteService>(PasteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
