export function formatCurrency(currencyValue: number): string {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(currencyValue / 100)

  return formattedCurrency
}

export function parseJustPositive(value: string): number {
  if (!value) return Number(value)

  const cleanedString = value.replace(/[^\d-]/g, '')

  return Number(cleanedString.replaceAll('-', ''))
}
