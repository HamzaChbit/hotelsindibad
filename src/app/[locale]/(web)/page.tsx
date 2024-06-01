

import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Gallery/Gallery";
import ClientComponent from "@/components/HeroSection/ClientComponent";


import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom, getbg } from "@/libs/apis";
import Loading from "./loading";





export default  async function Home() {
  const featuredRoom = await getFeaturedRoom()
  const fetch = await getbg()

  return (
    <>
 {
    <Loading/> ?  <>
    <div className="  bg-no-repeat bg-cover bg-center mb-5 bg-opacity-100 bg-contrast-50 "style={{ backgroundImage: `url(${fetch.coverImage})` }}>
     
     
  
  
        
       <ClientComponent />
      
            <PageSearch />
    </div>
          
          <FeaturedRoom featuredRoom={featuredRoom} />
          <Gallery />
  
          <NewsLetter />
      
     
 
  
          </> : <Loading/>
  } 
  
    </>
  );
}
