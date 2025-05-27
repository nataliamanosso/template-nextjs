'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Natalia Manosso. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
