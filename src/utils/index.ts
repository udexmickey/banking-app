export const CardNumberAutoFormat = (CardNumber: string): string => {
  const number = CardNumber.trim().replace(/[^0-9]/g, "");

  if (number.length < 4) return number;
  if (number.length < 9) return number.replace(/(\d{4})(\d{1})/, "$1 - $2");
  if (number.length < 13) return number.replace(/(\d{4})(\d{4})(\d{1})/, "$1 - $2 - $3");
  if (number.length < 17) return number.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, "$1 - $2 - $3 - $4");
  return number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})(\d{1})/, "$1-$2-$3-$4");
};