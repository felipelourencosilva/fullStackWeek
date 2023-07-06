'use client'

import { signIn, signOut, useSession } from 'Next-auth/react'
import TripSearch from './components/TripSearch'

export default function Home() {
  const { data } = useSession()

  return (
    <div>
      <TripSearch />
    </div>
  )
}
