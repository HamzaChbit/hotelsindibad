
import Link from "next/link";


const NewsLetter = () => {

 
    return (
    
       <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-20 lg:py-16"  data-aos="fade-up"
     >
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="hotel"
            src="/images/10.jpg"
            className="absolute inset-0 h-full w-full object-cover"
        
          />
        </div>
      </div>

      <div className="relative flex  bg-gray-100"
    >
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24 flex justify-evenly flex-col " data-aos="fade-up">
          <div>
                <h2 className="text-3xl font-bold sm:text-3xl tracking-wide ">
          <span  className="text-tertiary-dark border-b-2 border-black">HOTEL</span> RIAD SALAM AGADIR          </h2>


          <p className="mt-4 text-gray-600">
          Located in Agadir Close to the Sunday market, this 3-star 
          </p>
          </div>
      
<div>
  <h2  className="text-xl font-bold  mb-5 ">ALL GUEST ROOMS HAVE A VIEW AND RELAXATION FACILITIES</h2>
  <p className=" text-md text-gray-600">
          ALL GUEST ROOMS HAVE A VIEW AND RELAXATION FACILITIES
Views of the gardens,   All rooms are air-conditioned and also feature satellite TV. Some rooms have a private balcony. Dining options at Riad Al Salam Café include a buffet breakfast,  Moroccan specialties, fish dishes, and international food. 
          </p>   <Link
            href="/rooms"
            className="mt-8 inline-block rounded border border-tertiary-dark bg-tertiary-dark  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-tertiary-dark  focus:outline-none focus:ring active:text-tertiary-dark "
          >
            Get in Touch
          </Link>
</div>
      

         
        

       
        </div>
      </div>
    </div>
  </div>
</section>
  
    );
  };
  
  export default NewsLetter;