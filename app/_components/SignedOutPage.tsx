import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const SignedOutPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-8 bg-black/90 text-pink-500 w-full min-h-screen">
      <h1 className="lg:text-6xl font-bold uppercase lg:mt-20">
        <span className="text-white">Welcome to</span> AVON.
      </h1>
      <div className="flex items-center lg:gap-x-10">
        <Image src="/images/shrimp.png" alt="Logo" width={100} height={100} />
        <Image src="/images/shrimp.png" alt="Logo" width={100} height={100} />
        <Image src="/images/shrimp.png" alt="Logo" width={100} height={100} />
      </div>
      <p className="lg:w-[60%] text-center lg:text-lg capitalize">
        Avon is a river of a trained AI Model &apos;Gemini&apos; where it&apos;s
        shrimps are feeding off of the latest knowledge of the entire world.
        Come and dive deep into river avon and let these little shrimps help you
        out of your tedious problem.
      </p>
      <p className="lg:w-[60%] text-center lg:text-lg capitalize">
        But how exactly these little shrimps will help you out? You have to
        login into our trustworthy auth-App in order to use avon. It
        doesn&apos;t cost you a single penny neither attacks or spy on your
        beautiful account. We just want to protect our shrimps from the catches
        of fishermen who are trying to steal our data from Avon. Signing in will
        make you a safe user. Sign In and hold our hands tightly we&apos;re
        about backflip into river avon.
      </p>
      <div className="flex justify-center items-center lg:gap-x-[100px] lg:mt-6 lg:mb-10">
        <SignInButton mode="modal">
          <button className="bg-pink-500 text-black lg:px-12 py-2 rounded-md font-semibold uppercase transition hover:bg-transparent border-2 border-pink-500 hover:text-pink-500">
            Login
          </button>
        </SignInButton>
        <Link
          href="/"
          className="bg-transparent border-2 border-pink-500 text-pink-500 lg:px-8 py-2 rounded-md font-semibold uppercase"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default SignedOutPage;
