export function formatDriversLicense(num: string): string {
  const cleaned = num.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  if (cleaned.length !== 11) throw new Error("License must be 11 characters");
  return `${cleaned.slice(0,3)}-${cleaned.slice(3,7)}-${cleaned.slice(7)}`;
}
