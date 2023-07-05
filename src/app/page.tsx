'use client'

import { signIn, signOut, useSession } from 'Next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <div>
      
    </div>
  )
}
