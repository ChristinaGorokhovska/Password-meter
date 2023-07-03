export const checkStrength = (password: string) => {
  if (!password.length) return 0; // Empty field
  if (password.trim().length < 8 || /^\s|\s$/.test(password)) return -1; // Less then 8 characters or start or end with space

  const conditions: RegExp[] = [/[a-zA-Z]/, /\d/, /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/];

  const symbolsNotInArray = Array.from(password).filter((char) => {
    for (const reg of conditions) {
      if (reg.test(char)) {
        return false;
      }
    }
    return true;
  });

  if (symbolsNotInArray.length) return -2; // Incorrect character

  const matches = conditions.map((reg: RegExp) => reg.test(password)).filter((item: boolean) => item == true);

  return matches.length;
};
