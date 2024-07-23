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

// 알파벳, 숫자, 특수문자 중 2개만 믹스해서 5글자 이상이면 된당
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

export const doubleCheckNewPassword = (
  password: string,
  repassword: string
) => {
  if (password.trim() === repassword.trim()) return true;
  return false;
};

// passwordStrength

export const measurePasswordStrength = (password: string) => {
  const trimmedPassword = password.trim();
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let specialChar = false;
  const normalChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

  for (let i = 0; i < trimmedPassword.length; i++) {
    if (trimmedPassword[i] >= "a" && trimmedPassword[i] <= "z") {
      hasLower = true;
    }
    if (trimmedPassword[i] >= "A" && trimmedPassword[i] <= "Z") {
      hasUpper = true;
    }
    if (trimmedPassword[i] >= "0" && trimmedPassword[i] <= "9") {
      hasDigit = true;
    }
    if (!normalChars.includes(password[i])) {
      specialChar = true;
    }
  }

  let strength = "weak";

  if (
    hasLower &&
    hasUpper &&
    hasDigit &&
    specialChar &&
    trimmedPassword.length >= 8
  ) {
    strength = "strong";
  } else if (
    (hasLower || hasUpper) &&
    specialChar &&
    trimmedPassword.length >= 6
  ) {
    strength = "moderate";
  }

  return strength;
};
