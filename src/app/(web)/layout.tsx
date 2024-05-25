import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';

import { ClerkProvider } from "@clerk/nextjs";
import 'aos/dist/aos.css';
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Toast from "@/components/Tosat/Toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export const metadata: Metadata = {
  title: 'Hôtel Riad Salam Agadir',
  description: 'Amazighe Heritage Museum is 2.5 km from the accommodation, while Medina Polizzi is 2.9 km from the property. The nearest airport is Agadir–Al Massira Airport, 19 km from Hôtel Riad Salam Agadir.',
  keywords:["Hôtel Riad Salam Agadir","Riad Salam","Hôtel Riad Salam","Agadir","best hotel","hotel","Hotel"],
};
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
     <ClerkProvider>
    <html lang="en" >
       <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
   
        
   
      <ThemeProvider>
      <Toast />
  

    <main className='font-normal 

 '>
      
      <Header/> 
   
       
        {children}
        <Footer/>   
     
           </main>
     
   
        </ThemeProvider>
       
        </body>
    </html> 
    </ClerkProvider>
  );
}