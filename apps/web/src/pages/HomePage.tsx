import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/auth-provider'

export function HomePage() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">
          Welcome to Eden
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn your way.
        </p>
        
        <div className="flex justify-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button size="lg">Go to Dashboard</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button size="lg">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 