'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { UserCircleIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

export function AuthHeader() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-muted rounded-full animate-pulse"></div>
      </div>
    )
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <UserCircleIcon className="w-5 h-5" />
          <span>Welcome, {session.user?.name || session.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2 text-sm"
        >
          <ArrowRightOnRectangleIcon className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2 text-sm"
    >
      <ArrowLeftOnRectangleIcon className="w-4 h-4" />
      Sign In
    </button>
  )
}