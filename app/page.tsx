import { Footer } from '@/components/layout/footer'
import { Login } from '@/components/auth/login'

export default async function HomePage() {
  return (
    <main className="w-full flex flex-col justify-between">
      <Login />
      <Footer />
    </main>
  )
}
