import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SaaS Platform</h1>
          <nav className="space-x-4">
            <Link href="/features" className="text-foreground hover:text-primary">Features</Link>
            <Link href="/pricing" className="text-foreground hover:text-primary">Pricing</Link>
            <Link href="/dashboard" className="text-foreground hover:text-primary">Dashboard</Link>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our SaaS Platform</h2>
            <p className="text-xl mb-8">Empower your business with our white-labelable dashboard solution</p>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Multi-tenant</h4>
                <p>Securely manage multiple clients on a single platform</p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">White-labelable</h4>
                <p>Customize the look and feel to match your brand</p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Analytics</h4>
                <p>Gain insights with powerful reporting tools</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SaaS Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}