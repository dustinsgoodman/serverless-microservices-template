import { invoke } from '../../../../src/utils/LambdaUtil';

export const main = async (event) => {
  const response = await invoke({
    serviceName: 'user-api',
    functionName: 'user',
    payload: {},
    context: {},
  });

  console.log(response);
  return response;
};
