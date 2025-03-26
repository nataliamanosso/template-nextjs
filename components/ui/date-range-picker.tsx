'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DateRange } from 'react-day-picker'

interface DateRangePickerProps {
  date: DateRange | undefined
  onChange: (date: DateRange | undefined) => void
}

export function DateRangePicker({ date, onChange }: DateRangePickerProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <Popover modal>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal shadow-sm',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 icon-size" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, 'dd/MM/yyyy', { locale: ptBR })} -{' '}
                {format(date.to, 'dd/MM/yyyy', { locale: ptBR })}
              </>
            ) : (
              format(date.from, 'dd/MM/yyyy', { locale: ptBR })
            )
          ) : (
            <span>Selecione um período</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={onChange}
          numberOfMonths={2}
          locale={ptBR}
          disabled={{ before: today }}
          fromDate={today}
        />
      </PopoverContent>
    </Popover>
  )
}
