export const checkStrength = (password: string) => {
  if (!password.length) return 0;
  if (password.trim().length < 8 || /\s/.test(password)) return -1;

  const conditions: RegExp[] = [/[a-zA-Z]/g, /\d/, /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/];
  const matches = conditions.map((reg: RegExp) => reg.test(password)).filter((item: boolean) => item == true);

  return matches.length;
};
