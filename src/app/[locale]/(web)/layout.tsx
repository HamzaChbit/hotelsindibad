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
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";



export const metadata: Metadata = {
  title: 'Hotel Sindibad Agadir',
  description: 'Sindibad offers excellent value for money, with competitive prices and a wide range of amenities. The hotel is strategically located in the heart of Agadir, in the historic and touristy neighborhood of Talborjt. It is surrounded by two large squares, a beautiful pedestrian street leading to the sea, ',
  keywords:["Sindibad Hotel","Sindibad ","sindibad","Agadir","best hotel","hotel","Hotel","Hotel Sindibad Agadir"],
  authors:[{name:"Hotel Sindibad"}],
  creator:"Hotel Sindibad",
  publisher:"Hotel Sindibad",
  metadataBase: new URL("https://hotelsindibad.vercel.app"),
  twitter:{
    card:"summary_large_image"
        },
  openGraph: {
    title: 'Hotel Sindibad Agadir',
    description: 'Sindibad offers excellent value for money, with competitive prices and a wide range of amenities...',
    url: "https://hotelsindibad.vercel.app/",
    siteName: "Hotel Sindibad",
    type: "website",
  },
};
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});
export default async function  RootLayout({
  children, params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  return (  
     <ClerkProvider>
    <html lang={locale} >
       <head>
    
         <meta property="og:title" content='Hotel Sindibad Agadir' />
        <meta property="og:description" content='Sindibad offers excellent value for money, with competitive prices and a wide range of amenities. The hotel is strategically located in the heart of Agadir, in the historic and touristy neighborhood of Talborjt. It is surrounded by two large squares, a beautiful pedestrian street leading to the sea, ' />
            <meta name="robots" content="HOTEL, Sindibad, Sindibad, Hotel Sindibad, Hotel Agadir,Hotel Sindibad Agadir" />
        <meta property="og:url" content={'https://hotelsindibad.vercel.app/'} />
      </head>
      <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        
   
      <ThemeProvider>
      <Toast />
  

    <main className='font-normal 

 '>
      
      <Header  params={{
                  locale: locale
                }}/> 
   
       
        {children}
        <Footer/>   
     
           </main>
     
   
        </ThemeProvider>
        </NextIntlClientProvider>
        </body>
    </html> 
    </ClerkProvider>
  );
}