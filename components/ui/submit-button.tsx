import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SubmitButtonProps {
  btnLabel: string
  isLoading: boolean
  disabled?: boolean
  className?: string
}

export function SubmitButton({
  btnLabel,
  isLoading,
  disabled = false,
  className,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className={cn(className)}
      disabled={isLoading || disabled}
    >
      {isLoading && <Loader2 className="icon-size animate-spin mr-2" />}
      {btnLabel}
    </Button>
  )
}
