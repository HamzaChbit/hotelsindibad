import { defineField } from 'sanity';


const hotelToom = {
  name: 'hotelToom',
  title: 'Hotel Toom',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule =>
        Rule.required().max(50).error('Maximum 50 Characters'),
    }),
 
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
     
      options: {
        hotspot: true, // Allows selecting a hotspot for cropping
      },
    
    }),
]
   
   
};

export default hotelToom