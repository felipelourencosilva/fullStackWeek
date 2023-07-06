'use client'

import { SessionProvider } from 'Next-auth/react'

type Props = {
  children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}
