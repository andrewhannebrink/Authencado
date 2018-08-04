import { NoAuthModule } from './no-auth.module';

describe('NoAuthModule', () => {
  let noAuthModule: NoAuthModule;

  beforeEach(() => {
    noAuthModule = new NoAuthModule();
  });

  it('should create an instance', () => {
    expect(noAuthModule).toBeTruthy();
  });
});
