import { SignedOut, SignedIn } from "@clerk/nextjs";
import SignedOutPage from "./_components/SignedOutPage";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();
  return (
    <>
      <SignedOut>
        <SignedOutPage />
      </SignedOut>
      <SignedIn>Login 200</SignedIn>
    </>
  );
};

export default HomePage;
