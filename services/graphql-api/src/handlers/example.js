export const main = async (event) => {
  return {
    code: 'OK',
    message: event,
    statusCode: 200,
  };
};
