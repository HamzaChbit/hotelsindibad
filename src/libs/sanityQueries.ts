
import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images[]{_key, "url": asset->url},
    isFeatured,
    name,
    price,
    slug,
    "coverImage": coverImage.asset->url,
}`;

export const getRoomsQuery = groq`*[_type == "hotelRoom"] {
    _id, 
    "coverImage": coverImage.asset->url,
    description,
    dimension,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    type
}`;

export const getRoom = groq`*[_type == "hotelRoom" && slug.current == $slug][0] {
    _id,
    "coverImage": coverImage.asset->url,
    description,
    dimension,
    discount,
    isBooked,
    isFeatured,
    name,
    numberOfBeds,
    offeredAmenities,
    price,
    "images": images[]{_key, "url": asset->url},
    slug,
    specialNote,
    type
}`;

export const getbgQuery = groq`*[_type == "hotelToom"][0] { 
    _id, 
    "coverImage": coverImage.asset->url,
    name,
}`;

export const getUserBookingsQuery = groq`*[_type == 'booking']  {
    _id,
    hotelRoom -> {
        _id,
        name,
        slug,
        price
    },
    checkinDate,
    checkoutDate,
    telephone,
    email,
    numberOfDays,
    adults,
    children,
    totalPrice,
    discount
}`;

