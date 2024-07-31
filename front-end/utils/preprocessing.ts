export const getPortPolioId = (path: string, criteria: string) => {
  const portpolioId = path.split(`${criteria}/`)[1];
  return portpolioId;
};
