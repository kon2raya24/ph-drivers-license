
// Type exports for consumers
// Add specific types as needed
export function validateDriversLicense(num: string): boolean {
  const cleaned = num.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  return /^[A-Z0-9]{11}$/.test(cleaned);
}
