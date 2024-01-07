export function thousandFormat(value: number | string | undefined): string {
  if (value === undefined) {
    return ""; // or return some default value, depending on your requirements
  }

  const number: string = typeof value === "string" ? value : value.toString();
  if (number) {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
  return number;
}
