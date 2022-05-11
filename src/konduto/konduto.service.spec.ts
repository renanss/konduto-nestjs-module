import { Test, TestingModule } from '@nestjs/testing';
import { KondutoService } from './konduto.service';

describe('KondutoService', () => {
  let service: KondutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KondutoService],
    }).compile();

    service = module.get<KondutoService>(KondutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
