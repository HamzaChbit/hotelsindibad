import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Toast from "@/components/Tosat/Toast";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import 'aos/dist/aos.css';


export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
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
    <html lang="en" >
       <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
   
        
      <NextAuthProvider>
      <ThemeProvider>
      <Toast />
  

    <main className='font-normal 

 '>
      
      <Header/> 
   
       
        {children}
        <Footer/>   
     
           </main>
     
   
        </ThemeProvider>
        </NextAuthProvider>
        </body>
    </html>
  );
}