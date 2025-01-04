'use client';

import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const router = useRouter();


    const onclickFunction = () => {
      
      router.push('/')
    }
  return (
    <div className='container mx-auto h-[100vh] mt-20'>
      <h2 className='font-heading text-red-800 mb-10'>Something went wrong!!</h2>

      <button onClick={onclickFunction} className='btn-primary'>
        Try Again
      </button>
    </div>
  );
}