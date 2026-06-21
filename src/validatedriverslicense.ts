export function validateDriversLicense(num: string): boolean {
  const cleaned = num.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  return /^[A-Z0-9]{11}$/.test(cleaned);
}
