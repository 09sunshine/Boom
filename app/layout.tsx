import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

import {
  ClerkProvider
} from '@clerk/nextjs'




export const metadata: Metadata = {
  title: "Boom",
  description: "A Video Conferencing solution",
  icons: {
    icon: "./icons/logo.svg",
  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
     appearance={{
      layout: {
        logoImageUrl: '/icons/logo.svg',
        logoPlacement: 'inside',
        socialButtonsVariant: 'auto',
        socialButtonsPlacement: 'top',
      },
      variables: {
        colorPrimary: '#0E78F9',
        colorText : '#fff',
        colorBackground : '#1c1f2e',
        colorInputBackground : '#252a41',
        colorInputText : '#fff',

        
      }
     }}
    >
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-dark-2` }>
        
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
