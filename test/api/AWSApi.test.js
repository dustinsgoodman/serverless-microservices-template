import { config, SharedIniFileCredentials } from 'aws-sdk';

jest.mock('aws-sdk');

beforeEach(() => {
  // need to require this file between each test for full coverage
  // eslint-disable-next-line global-require
  require('API/AWSApi');
});

afterEach(() => {
  config.update.mockReset();
  jest.resetModules();
});

describe('config', () => {
  describe('when IS_OFFLINE is true', () => {
    test('updates AWS config credentials', () => {
      expect(config.update).toHaveBeenCalledWith({
        credentials: expect.any(SharedIniFileCredentials),
      });
    });
  });

  describe('when IS_OFFLINE is false', () => {
    const OLD_ENV = process.env;

    beforeAll(async () => {
      process.env = {
        ...OLD_ENV,
        IS_OFFLINE: 'false',
      };
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });

    test('does nothing', () => {
      expect(config.update).not.toHaveBeenCalled();
    });
  });
});
