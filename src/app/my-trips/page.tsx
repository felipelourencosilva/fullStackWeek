'use client'

import { getServerSession } from 'next-auth'
import React, { useEffect, useState } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { useSession } from 'Next-auth/react'
import { useRouter } from 'next/navigation'
import { TripReservation } from '@prisma/client'

const MyTrips = () => {
  const [reservations, setReservations] = useState<TripReservation[]>([])
  const { status, data } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated' || !data?.user ) {
      return router.push('/')
    }

    const fetchReservations = async () => {
      const response = await fetch(`http://localhost:3000/api/user/${(data?.user as any).id}/reservations`)
      const json = await response.json()

      setReservations(json)
    }

    fetchReservations()
  }, [status])

  console.log(reservations)
  return <div>My trips</div>
}

export default MyTrips
