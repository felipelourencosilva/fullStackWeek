import { Prisma, TripReservation } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import Button from '@/components/Button'

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetchReservations: () => void;
}


const UserReservationItem = ({ reservation }: UserReservationItemProps) => {
  const { trip } = reservation


  return(
    <div>
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">

        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 text-primaryDarker pb-5 border-b border-grayLighter border-solid">
        <h3 className="text-sm">Data</h3>
        <div className="flex items-center gap-1">
          <p className='text-sm'>{format(new Date(reservation.startDate), "dd 'de' MMMM", { locale: ptBR })}</p>
          {'-'}
          <p className='text-sm'>{format(new Date(reservation.endDate) , "dd 'de' MMMM", { locale: ptBR })}</p>
        </div>

        <h3 className="text-sm mt-5">Hóspedes</h3>
        <p className='text-sm'>{reservation.guests} hóspedes</p>

        </div>

          <h3 className="font-semibold text-sm text-primaryDarker mt-3">
            Informações do pagamento
          </h3>

          <div className="flex justify-between mt-1">
            <p className="text-primaryDarker text-sm mt-2">Total</p>
            <p className="font-medium text-sm">R${Number(reservation.totalPaid)}</p>
          </div>

          <Button className='mt-5' variant="danger">Cancelar</Button>
      </div>
    </div>
  )
}

export default UserReservationItem
