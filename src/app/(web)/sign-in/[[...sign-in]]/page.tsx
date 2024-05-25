import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div  className='flex justify-center items-center m-1 h-screen' >
      <SignIn />
    </div>
  );
};
export default SignInPage;