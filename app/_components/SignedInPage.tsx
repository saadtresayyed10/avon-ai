import Feedback from "./Feedback";
import FeedbackShowcase from "./FeedbackShowcase";
import HeroSection from "./HeroSection";

const SignedInPage = () => {
  return (
    <div className="flex flex-col lg:gap-y-16 justify-center items-center w-full min-h-screen bg-white text-black">
      <HeroSection />
      <FeedbackShowcase />
      <Feedback />
    </div>
  );
};

export default SignedInPage;
