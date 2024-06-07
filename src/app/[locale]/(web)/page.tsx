addimport FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Gallery/Gallery";
import ClientComponent from "@/components/HeroSection/ClientComponent";


import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom} from "@/libs/apis";






export default  async function Home() {
  const featuredRoom = await getFeaturedRoom()


  return (
 <>


{/*  
          <div className="  bg-no-repeat bg-cover bg-center mb-5 bg-opacity-100 bg-contrast-50 "style={{ backgroundImage: `url(${fetch.coverImage})` }}   data-aos="fade-down"  data-aos-duration="1500"> */}
     
     
     <div className=" bg-custom bg-no-repeat bg-cover bg-center mb-5 bg-opacity-100 bg-contrast-50  "  data-aos="fade-down"  data-aos-duration="1500">
  
  
        
          <ClientComponent />
         
               <PageSearch />
       </div>
             
             <FeaturedRoom featuredRoom={featuredRoom} />
             <Gallery />
     
             <NewsLetter />
         
          
    
          
             </> 
          
          
      

 
  );
}
