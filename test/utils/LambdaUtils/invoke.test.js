import { Lambda } from 'API/AWSApi';
import { invoke } from 'Utils/LambdaUtils';

const mockInvoke = jest.fn(() => new Promise());
jest.mock('API/AWSApi', () => {
  return {
    Lambda: jest.fn(() => ({
      invoke: mockInvoke,
    })),
  };
});


describe('.invoke', () => {
  let subject;

  beforeAll(() => {
    subject = invoke({
      serviceName: 'test-api',
      functionName: 'testFn',
      payload: { a: 1, b: 2 },
    });
  });

  test('calls Lambda#invoke with correct params', () => {
    expect(mockInvoke).toHaveBeenCalledWith({
      serviceName: 'test-api',
      functionName: 'testFn',
      payload: { a: 1, b: 2 },
    });
  });
});
