import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from "./currency.service";

describe('CurrencyController', () => {
  let service: CurrencyService;
  let controller: CurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyController],
      providers: [{
        provide: CurrencyService,
        useValue: {
          getTodayCurrencies: jest.fn()
        }
      }]
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
    controller = module.get<CurrencyController>(CurrencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
