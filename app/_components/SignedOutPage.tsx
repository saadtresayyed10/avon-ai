import FeedbackShowcase from "./FeedbackShowcase";
import HeroSection from "./HeroSection";

const SignedOutPage = () => {
  return (
    <div className="flex flex-col lg:gap-y-10 justify-center items-center w-full min-h-screen bg-white text-black">
      <HeroSection />
      <FeedbackShowcase />
    </div>
  );
};

export default SignedOutPage;
