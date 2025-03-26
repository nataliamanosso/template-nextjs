/**
 * Removes entries with empty values from the given parameters object.
 *
 * @param {Record<string, any>} params - The parameters object to be filtered.
 * @returns {Record<string, any>} - A new object with entries that have non-empty values.
 */
export function removeEmptyParams(
  params: Record<string, any>,
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== '' && value !== null && value !== undefined,
    ),
  )
}

/**
 * Converts a parameters object into a query string.
 *
 * @param {Record<string, any>} params - The parameters object to be converted.
 * @returns {string} - A query string representation of the parameters.
 */
export function toQueryString(params: Record<string, any>): string {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join('&')
}
