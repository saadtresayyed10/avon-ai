import { SignedOut } from "@clerk/nextjs";
import SignedOutPage from "./_components/SignedOutPage";

const HomePage = () => {
  return (
    <>
      <SignedOut>
        <SignedOutPage />
      </SignedOut>
    </>
  );
};

export default HomePage;
