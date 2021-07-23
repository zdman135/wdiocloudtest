/* eslint-env detox/detox */
describe('Login flow', () => {
  beforeAll(async () => {
    await device.launchApp({permissions: {notifications: 'YES'}});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome/login screen', async () => {
    let email = element(by.label('email'));
    if (device.getPlatform() === 'ios') {
      email = email.atIndex(1);
    }
    await expect(email).toBeVisible();
  });
});
