export const thousandFormat = (value: number | string): string => {
  const number: string = typeof value === "string" ? value : value.toString();
  if (number) {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
  return number;
};
