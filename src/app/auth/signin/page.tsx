'use client'

import { signIn, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { UserIcon } from '@heroicons/react/24/outline'

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null)

  useEffect(() => {
    const getAuthProviders = async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    getAuthProviders()
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-border">
        <div className="mb-6">
          <UserIcon className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-card-foreground mb-2 font-serif">
            Sign In
          </h1>
          <p className="text-muted-foreground">
            Access the Big Map Directory
          </p>
        </div>

        <div className="space-y-4">
          {providers && Object.values(providers).map((provider: any) => (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
            >
              Sign in with {provider.name}
            </button>
          ))}

          <div className="mt-6 pt-6 border-t border-border">
            <button
              onClick={() => signIn('credentials', { 
                email: 'demo@example.com', 
                callbackUrl: '/' 
              })}
              className="w-full bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
            >
              Continue as Demo User
            </button>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            Sign in to access personalized career paths and save your progress.
          </p>
        </div>
      </div>
    </div>
  )
}