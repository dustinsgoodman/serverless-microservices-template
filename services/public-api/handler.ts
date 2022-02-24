import { APIGatewayProxyHandler } from 'aws-lambda';

export const healthcheck: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: 'Public API is working!',
  };
};
