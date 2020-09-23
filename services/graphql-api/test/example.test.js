import { main as lambda } from '../src/handlers/example';

describe('example', () => {
  let event;

  beforeEach(() => {
    event = {
      body: JSON.stringify({}),
    };
  });

  test('returns the response', async () => {
    const { code, message, statusCode } = await lambda(event, {});
    expect(code).toBe('OK');
    expect(message).toEqual(event);
    expect(statusCode).toBe(200);
  });
});
