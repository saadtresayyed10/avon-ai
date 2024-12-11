import { SignedOut, SignedIn } from "@clerk/nextjs";
import SignedOutPage from "./_components/SignedOutPage";
import Feedback from "./_components/Feedback";

const HomePage = () => {
  return (
    <>
      <SignedOut>
        <SignedOutPage />
      </SignedOut>
      <SignedIn>
        <Feedback />
      </SignedIn>
    </>
  );
};

export default HomePage;
