export type Booking = {
    _id: string;
    hotelRoom: {
      _id: string;
      name: {
        en: string;
        fr: string;

      };
      slug: { current: string };
      price: number;
    };
    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    children: number;
    telephone: string;
    totalPrice: number;
    email:string;
    discount: number;
    user:string;
    userId:string;
  };