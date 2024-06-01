"use client"
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
 

  return (
    <div className='rounded-3xl border-none bg-white  bg-transparent  h-6 text-2xl font-semibold '>
     
      <select
        defaultValue={localActive}
        className='bg-transparent text-white  outline-none rounded-lg border-white '
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en' className='text-black'>en</option>
        <option value='fr'  className='text-black'>fr</option>
      </select>
    </div>
  );
}