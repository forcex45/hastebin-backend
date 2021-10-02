import { Test, TestingModule } from '@nestjs/testing';
import { PasteController } from './paste.controller';

describe('PasteController', () => {
  let controller: PasteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasteController],
    }).compile();

    controller = module.get<PasteController>(PasteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
