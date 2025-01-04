"use client"
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
   
      router.replace(`/${nextLocale}${currentPath}`);
    });
  };
 

  return (
    <div className='rounded-3xl border-none bg-transparent   text-2xl font-semibold '>
     
      <select
        defaultValue={localActive}
        className='bg-transparent md:text-white text-black  outline-none rounded-lg md:border-white border-black '
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en' className='text-black'>en</option>
        <option value='fr'  className='text-black'>fr</option>
      </select>
    </div>
  );
}