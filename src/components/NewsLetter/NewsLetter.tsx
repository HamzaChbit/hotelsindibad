
import { useLocale, useTranslations } from "next-intl";

import Link from "next/link";


const NewsLetter = () => {
  const t = useTranslations('NewsLetter');
  const locale = useLocale()
    return (
    
       <section data-aos="fade-up"  data-aos-duration="3000"> 
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1  lg:grid-cols-2">
      <div className="relative z-20 lg:py-16"  data-aos="fade-up"
     >
        <div className="relative h-64 sm:h-80 lg:h-full">
        <img
            alt="hotel"
            src="/images/8.jpg"
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
          <span  className="text-tertiary-dark border-b-2 border-black">HOTEL</span>  Sindibad AGADIR         </h2>


          <p className="mt-4 text-gray-600">
        {t('description')}
          </p>
          </div>
      
<div>
  <h2  className="text-xl font-bold mt-5 mb-5 ">{t('title')}</h2>
  <p className=" text-md text-gray-600">
  {t('decOne')}
<br />

          </p>   <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-block rounded border border-tertiary-dark bg-tertiary-dark  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-tertiary-dark  focus:outline-none focus:ring active:text-tertiary-dark "
          >
             {t('get')}
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