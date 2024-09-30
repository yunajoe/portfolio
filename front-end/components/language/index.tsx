export const t = (path: string, lang: string) => {
  try {
    let jsonData;
    switch (lang) {
      case "ko":
        jsonData = require(`@/translation/ko.json`);
        break;
      case "en":
        jsonData = require(`@/translation/en.json`);
        break;
      default:
        jsonData = require(`@/translation/ko.json`);
    }
    const keys = path.split(".");
    return keys.reduce((acc, key) => {
      return acc[key];
    }, jsonData);
  } catch (err) {
    return err;
  }
};
