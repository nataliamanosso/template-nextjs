/**
 * Formats a number as a currency string.
 * @param value - The numeric value to be formatted.
 * @param currency - The currency - by default it's 'BRL'.
 * @returns The formatted currency string.
 */
export function formatCurrency(
  value: number,
  currency: string = 'BRL',
): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value)
}
