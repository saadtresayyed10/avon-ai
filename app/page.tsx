import { SignedOut, SignedIn } from "@clerk/nextjs";
import SignedOutPage from "./_components/SignedOutPage";
import SignedInPage from "./_components/SignedInPage";

const HomePage = () => {
  return (
    <>
      <SignedOut>
        <SignedOutPage />
      </SignedOut>
      <SignedIn>
        <SignedInPage />
      </SignedIn>
    </>
  );
};

export default HomePage;
