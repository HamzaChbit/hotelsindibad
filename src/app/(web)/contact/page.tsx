'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
interface FormData {
  user_name: string;

  user_email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (data: FormData) => {
    if (!data.user_email || data.user_email === "") {
      toast.error("Please enter your email address");
      return;
    }
    if (!data.user_name || data.user_name === "") {
      toast.error("Please enter your name");
      return;
    }
    if (!data.message || data.message === "") {
      toast.error("Please enter a message");
      return;
    }

    emailjs.send('service_5n844ff', 'template_rgppavu', {
      to_name: 'Hotel Agadir', // You can dynamically set this if needed
      from_name: data.user_name,
      message: data.message,
    }, 'oSY2rpcj8zlnFjDD-')
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent!");
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const onSubmit = (data: FormData) => {
    sendEmail(data);
  };

  return (
    // <div className='md:max-w-7xl w-full mx-10 h-full md:mx-auto '>
    <div className='container  mt-20 mx-auto  px-2 md:px-4 '>
<div  className='flex flex-col h-full w-full mx-2  items-center ' >
   <div className='flex flex-col  mt-10  justify-between   items-center gap-x-10 md:flex-row h-full ' >
        <div className='flex flex-col gap-y-5   w-[80%]  md:w-[40%]' >
          <h1 className='py-4 text- text-4xl font-bold tracking-wide'><span className='text-tertiary-dark'>Get in </span>
            Touch</h1>
          <p className='text-xl mb-8  maw-w-[40%] ' >Fill in the form with your questions, comments and concerns, and  we will get right back to you.</p>
          <hr className='text-tertiary-dark' />

          <h1 className='pt-4 text-green text-2xl font-bold' >CONTACT INFO</h1>
          <p>
            Have any Queries? Let us know. We will clear it for you at the best.
          </p>


          <div className='flex flex-col justify-between   ' >
            <div className='flex  items-center  flex-row gap-x-10  py-5  ' >
              <FaMapMarkerAlt size={30} />
              <div className='flex flex-col'>
                <h2 className='  text-xl font-bold'>Hôtel Riad salam Agadir</h2>
                <p>N° 8 Ave Abderrahim Bouabid, Agadir 80000</p>
              </div>

            </div>

            <div className='flex flex-row  items-center gap-x-10 py-5 ' >

              <MdOutlineEmail size={30} />
              <div className='flex flex-col'>
                <h1 className='  text-xl font-bold'>Email</h1>
                <p>reception@hotelriadsalam.com</p>
              </div>
            </div>

            <div className='flex flex-row   items-center gap-x-10 py-5 ' >
              <FaPhone size={30} />
              <div className='flex flex-col'>
                <h1 className='font-bold  text-xl '>
                  PHONE</h1>
                <p> +212 5 28 23 23 45</p>
              </div>
            </div>
          </div>




        </div>



        <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[80%] md:w-[40%] '>
          <div className='flex flex-col md:flex-row justify-between gap-x-10 py-8'>
            <div className='flex flex-col w-full'>
              <label className='py-3 text-green text-2xl font-medium'>Your Name </label>
              <input
                type="text"
                {...register("user_name", { required: true })}
                className='border-b-2 mt-1 w-full  py-3 bg-hero focus:border-b-green text-xl shadow-sm placeholder-slate-400 focus:outline-none  '
              />
              {errors.user_name && <span className="text-red-500">This field is required</span>}
            </div>

          </div>
          <label className='py-4 text-green text-2xl font-medium'>Email</label>
          <input
            type="email"
            {...register("user_email", { required: true })}
            className='border-b-2 mt-1 w-full  py-3 bg-hero focus:border-b-green text-xl shadow-sm placeholder-slate-400 focus:outline-none  '
          />
          {errors.user_email && <span className="text-red-500">This field is required</span>}
          <label className='py-8 text-green text-2xl font-medium'>Message</label>
          <textarea
            {...register("message", { required: true })}
            className='border-b-2 mt-1 w-full  py-5  focus:border-red text-xl shadow-sm placeholder-slate-400   '
          />
          {errors.message && <span className="text-red-500">This field is required</span>}
          <div className='flex justify-end'>
            <input
              type="submit"
              value="Send"
              className='btn-primary mt-5 cursor-pointer'
            />
          </div>
        </form>

        






      </div>
      <div className='flex flex-col  mt-10  justify-between  md:flex-row h-full w-[80%] md:w-full   '>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3440.9263504285523!2d-9.5855995!3d30.4098314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7b11d26dedd%3A0x18da058390a05597!2sH%C3%B4tel%20Riad%20salam%20Agadir!5e0!3m2!1sfr!2sma!4v1716312219255!5m2!1sfr!2sma"
        className='h-60  w-full   '
         >
        </iframe>

      </div>
</div>
     


    </div>
  );
};

export default Contact;