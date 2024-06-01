import { defineField } from 'sanity';

const roomTypes = [
  { title: 'Standard Double Room' , value: 'standard double room' },
  { title: 'Double Room with Garden View ', value: 'double room with garden view' },
  { title: 'Standard Family Room', value: 'standard family room' },
 
];

const hotelRoom = {
  name: 'hotelRoom',
  title: 'Hotel Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string', validation: Rule => Rule.required().max(50).error('Maximum 50 Characters') },
        { name: 'fr', title: 'French', type: 'string', validation: Rule => Rule.required().max(50).error('Maximum 50 Characters') },
      ],
      
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
       type: 'object',
      
      fields: [
        { name: 'en', title: 'English', type: 'string',  },
        { name: 'fr', title: 'French', type: 'string',  },
      ],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.min(0),
    }),  
      defineField({
      name: "images",
      title: "images",
      type: "array",
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
 
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
     
      options: {
        hotspot: true, // Allows selecting a hotspot for cropping
      },
    
    }),
  
    defineField({
      name: 'type',
      title: 'Room Type',
      type: 'string',
      options: {
        list: roomTypes,
      },
      validation: Rule => Rule.required(),
      initialValue: 'single room',
    }),
    defineField({
      name: 'specialNote',
      title: 'Special Note',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue:
        'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    }),
    defineField({
      name: 'dimension',
      title: 'Dimension',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string',  },
        { name: 'fr', title: 'French', type: 'string',  },
      ],
    }),
    defineField({
      name: 'numberOfBeds',
      title: 'Number Of Beds',
      type: 'number',
      validation: Rule => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: 'offeredAmenities',
      title: 'Offered Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'amenity', title: 'Amenity', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),
  
  ],
};

export default hotelRoom;