import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Head from 'next/head'
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
  keywords: [
    // English
    "Sindibad Hotel",
    "Sindibad",
    "sindibad",
    "Agadir",
    "best hotel",
    "hotel",
    "Hotel",
    "Hotel Sindibad Agadir",
    "luxury accommodation",
    "beach resort",
    "vacation destination",
    "Morocco",
    "book now",
    "beachfront hotel",
    "Sindibad Hotel Agadir",
    "holiday experience",
    "travel",
    "explore",
    "discover",
    "family-friendly",
    "activities",
    "entertainment",
    "affordable luxury",
    "ocean view rooms",
    "5-star service",
    "beachside paradise",
    "relaxation",
    "hospitality",
    "comfort",
    "leisure",
    "dining options",
    "local attractions",
    "cultural experiences",
    "shopping",
    "nightlife",
    "excursions",
    "tourist spots",
    "memorable stay",
    "oceanfront retreat",
    "spacious suites",
    "modern amenities",
    "friendly staff",
    "business travel",
    "honeymoon destination",
    "destination wedding",
    "romantic getaway",
    "family vacation",
    "summer holiday",
    "winter escape",
    "unforgettable experience",
    // French
    "Hôtel Sindibad",
    "Sindibad",
    "Agadir",
    "meilleur hôtel",
    "hôtel",
    "Hôtel",
    "Hôtel Sindibad Agadir",
    "hébergement de luxe",
    "station balnéaire",
    "destination de vacances",
    "Maroc",
    "réservez maintenant",
    "hôtel en bord de mer",
    "expérience de vacances",
    "voyage",
    "explorer",
    "découvrir",
    "convivial pour les familles",
    "activités",
    "divertissement",
    "luxe abordable",
    "chambres avec vue sur l'océan",
    "service 5 étoiles",
    "paradis en bord de mer",
    "détente",
    "hospitalité",
    "confort",
    "loisirs",
    "options de restauration",
    "attractions locales",
    "expériences culturelles",
    "shopping",
    "vie nocturne",
    "excursions",
    "sites touristiques",
    "séjour mémorable",
    "retraite en bord de mer",
    "suites spacieuses",
    "équipements modernes",
    "personnel amical",
    "voyage d'affaires",
    "destination de lune de miel",
    "mariage de destination",
    "escapade romantique",
    "vacances en famille",
    "vacances d'été",
    "évasion hivernale",
    "expérience inoubliable"
],
icons:{
  icon:['/favicon.ico?v=1'],
  apple:['/apple-touch-icon.png?v=4'],
  shortcut:['/apple-touch-icon.png']

},
  authors:[{name:"Hotel Sindibad"}],
  creator:"Hotel Sindibad",
  publisher:"Hotel Sindibad",
  manifest:'/site.webmanifest',
  metadataBase: new URL("https://hotelsindibad.ma"),
  twitter:{
    card:"summary_large_image"
        },
  openGraph: {
    title: 'Hotel Sindibad Agadir',
    description: 'Sindibad offers excellent value for money, with competitive prices and a wide range of amenities...',
    url: "https://hotelsindibad.ma",
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
    <Head>
    
         <meta property="og:title" content='Hotel Sindibad Agadir' />
        <meta property="og:description" content='Sindibad offers excellent value for money, with competitive prices and a wide range of amenities. The hotel is strategically located in the heart of Agadir, in the historic and touristy neighborhood of Talborjt. It is surrounded by two large squares, a beautiful pedestrian street leading to the sea, ' />
        <meta name="msvalidate.01" content="A42745912D5B69F1E1F1C11B485912B2" />
            <meta name="robots" content="index, follow, Sindibad, sindibad.ma, HOTEL, Agadir, best hotel in Agadir, luxury accommodation, beach resort, vacation destination, Morocco, book now, beachfront hotel, Sindibad Hotel, holiday experience, travel, explore, discover, family-friendly, activities, entertainment" />
            <meta name="google-site-verification" content="x3CZssCkoEaQQ17NXPwpD86pRdbdYi8j-95Ey2qMpyg" />
            <meta property="og:image" content="/images/1.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta property="og:image" content="/images/2.jpg" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="/images/1.png" />
<meta name="twitter:image:type" content="image/png" />
<meta name="twitter:image:width" content="1200" />
<meta name="twitter:image:height" content="630" />


        <meta property="og:url" content={'https://hotelsindibad.ma'} />
      </Head>
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