import { Test, TestingModule } from '@nestjs/testing';
import { KondutoController } from './konduto.controller';

describe('KondutoController', () => {
  let controller: KondutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KondutoController],
    }).compile();

    controller = module.get<KondutoController>(KondutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
