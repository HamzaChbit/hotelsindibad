

import { NextResponse } from 'next/server';


import { createBooking, getRoom } from '@/libs/apis';


type RequestData = {
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  children: number;
  telephone: string;
  numberOfDays: number;
  hotelRoomSlug: string;
  email:string;

 
};

export async function POST(req: Request, res: Response) {
  const {
    checkinDate,
    adults,
    checkoutDate,
    children,
    hotelRoomSlug,
    telephone,
    numberOfDays,
    email,

   
  }: RequestData = await req.json();

  if (
    !checkinDate ||
    !checkoutDate ||
    !adults ||
  
    !email ||
    !telephone ||
    !hotelRoomSlug ||
    !numberOfDays
  ) {
    return new NextResponse('Please fill all fields', { status: 400 });
  }



  
  const formattedCheckoutDate = checkoutDate.split('T')[0];
  const formattedCheckinDate = checkinDate.split('T')[0];

  try {
    const room = await getRoom(hotelRoomSlug);
    const discountPrice = room.price - (room.price / 100) * room.discount;
    const totalPrice = discountPrice * numberOfDays;

    const stripeSession = await createBooking({
      adults,
      checkinDate: formattedCheckinDate,
      checkoutDate: formattedCheckoutDate,
      children,
      hotelRoom: room._id,
      numberOfDays,
      telephone,
      email,
      discount: room.discount,
      totalPrice,
 
    });

    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: 'Payment session created',
    });
  } catch (error: any) {
    console.log('Payment failed', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
