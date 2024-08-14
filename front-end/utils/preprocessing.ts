export const getPortPolioId = (path: string, criteria: string) => {
  const portpolioId = path.split(`${criteria}/`)[1];
  return portpolioId;
};

export const getTargetRef = (targetRefArr: any[]) => {
  const homeRef = targetRefArr[0].homeRef;
  const aboutMeRef = targetRefArr[1].aboutMeRef;
  const portFolioRef = targetRefArr[2].portFolioRef;
  const resumeRef = targetRefArr[3].resumeRef;

  return {
    homeRef,
    aboutMeRef,
    portFolioRef,
    resumeRef,
  };
};
