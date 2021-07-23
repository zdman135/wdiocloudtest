const { join } = require('path');
const { config } = require('./wdio.conf');

config.specs = [
    './tests/specs/**/*.spec.js',
];

config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:deviceName': 'iPhone 12',
        'appium:platformVersion': '14.4',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        'appium:app': 'replace this with your locally built app - full path to app file',
//        'appium:app': join(process.cwd(), './apps/iOS-Simulator-NativeDemoApp-0.2.1.app.zip'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
