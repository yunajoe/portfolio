const usernameRegex = /^.{3,}$/;
const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const excludeKorean = /^[^가-힣ㄱ-ㅎㅏ-ㅣ]*$/;
const atLeastAlphabet = /^(?=.*[a-zA-Z]).+$/;
const atLeastNumber = /^(?=.*\d).+$/;
const atLeastSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;

export const usernameRegexFunc = (value: string) => {
  if (value) {
    const trimmedValue = value.trim();
    return usernameRegex.test(trimmedValue);
  }
};

export const emailRegexFunc = (value: string) => {
  const trimmedValue = value.trim();
  return emailRegex.test(trimmedValue);
};

export const passwordRegexFunc = (value: string) => {
  const trimmedValue = value.trim();
  if (excludeKorean.test(trimmedValue) && trimmedValue.length > 5) {
    if (
      atLeastAlphabet.test(trimmedValue) &&
      atLeastNumber.test(trimmedValue)
    ) {
      return true;
    }
    if (
      atLeastAlphabet.test(trimmedValue) &&
      atLeastSpecial.test(trimmedValue)
    ) {
      return true;
    }
    if (atLeastNumber.test(trimmedValue) && atLeastSpecial.test(trimmedValue)) {
      return true;
    }
  }
  return false;
};
