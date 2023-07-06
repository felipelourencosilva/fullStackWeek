'use client'

import { signIn, signOut, useSession } from 'Next-auth/react'
import TripSearch from './components/TripSearch'
import QuickSearch from './components/QuickSearch'
import RecommendedTrips from './components/RecommendedTrips'

export default function Home() {
  const { data } = useSession()

  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  )
}
