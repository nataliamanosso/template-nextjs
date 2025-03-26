import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export const InputSearch = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative flex-1">
      <Search
        className={`absolute left-2 icon-size right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground/50 ${isFocused ? 'text-muted-foreground/100' : ''} transition-all`}
      />
      <Input
        {...props}
        className="pl-8 bg-background"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}
