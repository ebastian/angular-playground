import { DecimalModule } from './decimal.module';

describe('DecimalModule', () => {
  let decimalModule: DecimalModule;

  beforeEach(() => {
    decimalModule = new DecimalModule();
  });

  it('should create an instance', () => {
    expect(decimalModule).toBeTruthy();
  });
});
