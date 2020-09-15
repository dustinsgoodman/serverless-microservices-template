export const main = async (event) => {
  return {
    code: 'OK',
    message: {
      id: 1,
      username: 'test',
    },
    statusCode: 200,
  };
};
