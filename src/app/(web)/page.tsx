

import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Gallery/Gallery";

import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom, getbg } from "@/libs/apis";
import LoadingSpinner from "./loading";




export default  async function Home() {
  const featuredRoom = await getFeaturedRoom()
  const fetch = await getbg()

  return (
    <>
    {
      <LoadingSpinner/> ?  <>
    <div className="  bg-no-repeat bg-cover bg-center mb-5 bg-opacity-100 bg-contrast-50 "style={{ backgroundImage: `url(${fetch.coverImage})` }}>
     
     
  
  
        
       <HeroSection />
      
            <PageSearch />
    </div>
          
          <FeaturedRoom featuredRoom={featuredRoom} />
          <Gallery />
  
          <NewsLetter />
      
     
          </> : <LoadingSpinner/>
    } 
  
  
    </>
  );
}
