import StreamVideoProvider from '@/providers.tsx/StreamClientProviders'
import { Metadata } from 'next';
import React, {ReactNode} from 'react'

export const metadata: Metadata = {
  title: "VidConnect",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout