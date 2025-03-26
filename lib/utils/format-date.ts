import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

/**
 * Formats a date from ISO format to 'dd/MM/yyyy' format.
 * @param date - The ISO date to be formatted.
 * @returns The formatted date string or an empty string if the input is invalid.
 */
export function formatDate(date: Date | string | undefined) {
  if (!date) {
    return '-'
  }

  try {
    return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
  } catch (error) {
    return '-'
  }
}
