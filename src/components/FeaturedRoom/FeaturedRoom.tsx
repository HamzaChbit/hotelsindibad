'use client';
import React, { useEffect } from 'react'
import { FC } from 'react';
import Image from 'next/image';

import { Room } from '@/models/room';
import Link from 'next/link';



import AOS from 'aos';
import { useLocale, useTranslations } from 'next-intl';

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = props => {
  const { featuredRoom } = props;
  useEffect(() => {
    AOS.init()

  }, []);
    const t = useTranslations('FeaturedRoom')
  const locale = useLocale()
  return (
    <section className='flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto'  
 >
      <div className='md:grid gap-8 grid-cols-1 ' data-aos="fade-up"
    
     >
        <div className='rounded-2xl overflow-hidden h-48 mb-4 md:mb-0' >
          <Image
            src={featuredRoom.coverImage}
            alt={featuredRoom.name.en}
            title="Standard Double Room"
            width={300}
            height={300}
            className='img scale-animation'
          />
      
        </div>
        <div className='grid grid-cols-2 gap-8 h-48'>



{featuredRoom.images.slice(0, 2).map(image => (
            <div key={image._key} className='rounded-2xl overflow-hidden'>
              <Image
                src={image.url}
                alt={"room "}
                title="Standard Double Room"
                width={300}
                height={300}
                className='img scale-animation'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='md:py-10 md:w-1/2 text-left'data-aos="fade-up"
    
  
   >
        <h2 className='font-heading mb-12'>{t('featured')}</h2>

        <p className='font-normal max-w-md'>{ locale == "en" ?    featuredRoom.description.en.slice(0, 100) : featuredRoom.description.fr.slice(0, 100)}</p>

        <div className='flex flex-col md:flex-row md:items-end justify-between mt-5'>
          <div className='flex mb-3 md:mb-0'>
            <div className='flex gap-3 flex-col items-center justify-center mr-4'>
              <p className='text-xs lg:text-xl text-center'>{t('from')}</p>
              <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                $ {featuredRoom.price}
              </p>
            </div>


            {featuredRoom.discount && (
  <div className='flex gap-3 flex-col items-center justify-center mr-4'>
    <p className='text-xs lg:text-xl text-center'>{t('discount')}</p>
    <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
      $ {featuredRoom.discount}
    </p>
  </div>
)}

         
          </div>

          <Link
            href={`/${locale}/rooms/${featuredRoom.slug.current}`}
            className='border h-fit text-center border-tertiary-dark text-tertiary-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl'  title="Visit Room"
          >
           {t("more")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;