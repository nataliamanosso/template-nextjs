import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

export function ExampleToasts() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Default Toast',
            description: 'Default Toast Description',
          })
        }}
      >
        Default
      </Button>
      <Button
        variant="success"
        onClick={() => {
          toast({
            title: 'Success Toast',
            variant: 'success',
            description: 'Success Toast Description',
          })
        }}
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          toast({
            title: 'Destructive Toast',
            variant: 'destructive',
            description: 'Destructive Toast Description',
          })
        }}
      >
        Destructive
      </Button>
      <Button
        variant="warning"
        onClick={() => {
          toast({
            title: 'Warning Toast',
            variant: 'warning',
            description: 'Warning Toast Description',
          })
        }}
      >
        Warning
      </Button>
    </section>
  )
}
