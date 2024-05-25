import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div  className='flex justify-center items-center m-1 h-screen' >
      <SignUp />
    </div>
  );
};
export default SignUpPage;