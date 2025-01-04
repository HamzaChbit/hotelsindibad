'use client';



import DatePicker from 'react-datepicker';

import { Dispatch, FC, SetStateAction} from 'react';
import { PhoneInput } from 'react-international-phone';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-international-phone/style.css';

import { useLocale, useTranslations } from 'next-intl';
type Props ={
  price: number;
  discount : number;
  specialNote :string;
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  calcMinCheckoutDate: () => Date | null;
  setAdults: Dispatch<SetStateAction<number>>;
  setNoOfChildren: Dispatch<SetStateAction<number>>;
  adults: number;
  noOfChildren: number;
  telephone: string;
  isBooked:boolean;
  
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
 
  setTelephone: Dispatch<SetStateAction<string>>;
  handleBookNowClick: () => void;
}


const BookRoomCta:FC<Props> = props => {
  

const {price,discount ,specialNote,
  checkinDate,
  setCheckinDate,
  checkoutDate,
  setCheckoutDate,
  calcMinCheckoutDate,
  adults,
  setAdults,
  noOfChildren,
  setNoOfChildren,
  isBooked,
  telephone, // Add telephone prop
  setTelephone, 
  handleBookNowClick,

  email,
  setEmail,


}=props;
  

  const discountPrice = price - (price * discount / 100);
 
  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };
 
  const locale = useLocale()
  const t = useTranslations('BookNow');
  const d = useTranslations('FeaturedRoom')
  return (
   <div className='px-7 py-6'>
  <h3>
  {discount > 0 ? (
    <span className='font-bold text-xl'>
      $ {price} {' '}| Discount {discount}%. Now{' '}
      <span className='text-tertiary-dark'>$ {discountPrice}</span>
    </span>
  ) : (
    <span className={`${discount ? 'text-gray-400' : ''} font-bold text-xl`}>
     {d('from')} $ {price}
    </span>
  )}
</h3>

   <div className='w-full border-b-2 border-b-secondary my-2' />
   <h4 className='my-8'>{specialNote}</h4>
   <div  className='flex mt-4 flex-col' > 
    <label htmlFor="email" className='block text-sm font-medium text-gray-900 dark:text-dark-400'>
           Email
            </label>
            <input type="email" id='email' value={email}   required onChange={e => setEmail(e.target.value)}
           
           
            className='w-full border border-gray-300 rounded-lg p-2.5 
            
            '
            />

      
      
      </div>  
 <div className='flex'>
 
       <div className="w-1/2 pr-2" >
      <label htmlFor="check-in-date" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
      {t("checkIn")}
      </label>
      <DatePicker
       selected={checkinDate} 
      onChange={date => setCheckinDate(date)} 
      dateFormat='dd/MM/yyyy'
       minDate={new Date()}
      
      id="check-in-date"
      
      className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"/>
    </div>
    <div className="w-1/2 pr-2" >
      <label htmlFor="check-out-date" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
      {t("checkOut")}
      </label>
      <DatePicker
       selected={checkoutDate} 
      onChange={date => setCheckoutDate(date)} 
      dateFormat='dd/MM/yyyy'
      disabled={!checkinDate}
       minDate={calcMinCheckoutDate()}
      
      id="check-out-date"
      
      className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"/>
    </div>
        </div>

        <div  className='flex mt-4' >
          <div className='w-1/2 pr-2' >
            <label htmlFor="adults" className='block text-sm font-medium text-gray-900 dark:text-dark-400'>
            {t("adults")}
            </label>
            <input type="number" id='adults' value={adults}    onChange={e => setAdults(+e.target.value)}
            min={1}
            max={4}
            className='w-full border border-gray-300 rounded-lg p-2.5 
            
            '
            />

          </div>
          <div className='w-1/2 pl-2'>
          <label
            htmlFor='children'
            className='block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
             {t("children")}
          </label>
          <input
            type='number'
            id='children'
            value={noOfChildren}
            onChange={e => setNoOfChildren(+e.target.value)}
            min={0}
            max={3}
            className='w-full border border-gray-300 rounded-lg p-2.5'
          />
        </div>



        </div>
        <div className='mt-4'>
    <label
      htmlFor='telephone'
      className='block text-sm font-medium text-gray-900 dark:text-gray-400'
    >
      Telephone Number
    </label>
    <PhoneInput
       
    
      required
      value={telephone}
      defaultCountry="ma"
      onChange={e => setTelephone(e)}
        className=' border border-gray-300 rounded-lg p-2.5'
    />
  
  </div>


 
 

 

        {calcNoOfDays() > 0 ?( <p className='mt-3'>

          {t("total")}: $ {calcNoOfDays() * discountPrice}
        </p>)
      : ( <></>)
      }

   <button
        disabled={isBooked}
        onClick={handleBookNowClick}
        className='btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed'
      >
{t("book")}
      </button>  
  




    </div>
  )
}

export default BookRoomCta