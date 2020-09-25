export const isProduction = () => {
  const { SLS_STAGE } = process.env;
  return SLS_STAGE === 'prod';
};
