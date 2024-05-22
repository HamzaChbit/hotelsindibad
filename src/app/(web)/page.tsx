

import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Gallery/Gallery";

import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";




export default  async function Home() {
  const featuredRoom = await getFeaturedRoom()


  return (
    <>

<div className=" py-10  bg-custom bg-no-repeat bg-cover bg-center mb-5  " >

       <HeroSection />
       <PageSearch /> 
       </div>
     <FeaturedRoom featuredRoom={featuredRoom} /> 
    <Gallery />
     <NewsLetter /> 

  </>
  );
}
