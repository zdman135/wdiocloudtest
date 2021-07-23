const { join, path } = require('path');
const { config } = require('./wdio.conf');

// const Reporting = require('perfecto-reporting');
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4YmI4YmZmZS1kMzBjLTQ2MjctYmMxMS0zNTYyMmY1ZDkyMGYifQ.eyJpYXQiOjE2MjY5NzAxMTAsImp0aSI6IjhkMjQ0MGM4LTkxOGItNDk3Yy04Y2ZhLWMzMWNkNTc4MjliNCIsImlzcyI6Imh0dHBzOi8vYXV0aC5wZXJmZWN0b21vYmlsZS5jb20vYXV0aC9yZWFsbXMvZGVtby1wZXJmZWN0b21vYmlsZS1jb20iLCJhdWQiOiJodHRwczovL2F1dGgucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL2RlbW8tcGVyZmVjdG9tb2JpbGUtY29tIiwic3ViIjoiOTNhY2Y1YWUtNmIzMy00MGY2LTk3ZGQtYmQ3NGJiODQ0ZjIwIiwidHlwIjoiT2ZmbGluZSIsImF6cCI6Im9mZmxpbmUtdG9rZW4tZ2VuZXJhdG9yIiwibm9uY2UiOiIzMzU5OTc0ZS0wZDNjLTQ4ZjctODg4Ny0wYzEwMThhMThlMTUiLCJzZXNzaW9uX3N0YXRlIjoiOWU0MWMwNzMtYjlmYy00ZTE1LWJiZTMtYjE0MWVhNmI3YTEwIiwic2NvcGUiOiJvcGVuaWQgb2ZmbGluZV9hY2Nlc3MifQ.qHlw0qAXJPXizWbb2eIoBSXMKJE00nFjA8vt36VqqcU';
const host = 'demo';

global.flag_run_mode = 'perfecto';

config.protocol = 'http',
config.hostname = host +'.perfectomobile.com',
config.path = '/nexperience/perfectomobile/wd/hub',
config.port = 80,

config.specs = [
    './tests/specs/**/*.spec.js',
];

config.services = [],
config.capabilities = [
    {
        maxInstances:1,
        platformName: 'Android',
        securityToken: securityToken,
        platformVersion: '11',
        enableAppiumBehavior: true,
        newCommandTimeout: 240,
        app: 'PRIVATE:143.apk',
        appPackage: 'com.drivevariant.driver_app.staging',
        autoAcceptAlerts: true
    }]

exports.config = config;
