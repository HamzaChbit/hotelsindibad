import Image from 'next/image';

export const heading1 = (
  <div className='opacity-0'>
    <div className='flex items-center justify-center'>
      <div className='w-12 h-0.5 bg-white mt-4' >

      </div>
      <h2 className='font-bold md:font-normal md:text-4xl text-xl  mb-6 mx-1'> LUXURY PARADISE </h2>
      <div className='w-12 h-0.5 bg-white mt-4' >

</div>
      
     
    </div>
    <h1 className='font-heading mb-6'>Explore Our Exquisite Hotel</h1>
  
    {/* <button className='btn-primary'>Get Started</button> */}
  </div>
);

export const section2 = (
  <div className='md:grid hidden gap-8 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-48'>
      <Image
        src='/images/hero-1.jpeg'
        alt='hero-1'
        width={300}
        height={300}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-48'>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/hero-2.jpeg'
          alt='hero-2'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/hero-3.jpeg'
          alt='hero-3'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
    </div>
  </div>
);