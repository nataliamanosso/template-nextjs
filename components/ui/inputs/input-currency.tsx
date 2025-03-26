import React from 'react'
import { NumericFormat } from 'react-number-format'

import { cn } from '@/lib/utils'

interface InputCurrencyProps {
  value: string | number
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
  placeholder?: string
  className?: string
}

export const InputCurrency = React.forwardRef<
  HTMLInputElement,
  InputCurrencyProps
>(function InputCurrency(
  { className, value, onChange, name, placeholder }: InputCurrencyProps,
  ref,
) {
  return (
    <NumericFormat
      value={value}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        })
      }}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      placeholder={placeholder}
      getInputRef={ref}
    />
  )
})
