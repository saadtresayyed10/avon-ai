import * as React from "react";
import { HeroSection } from "./HeroSection";
import { CallToAction } from "./CallToAction";

export const AvonLanding: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-14 pb-48 bg-stone-900 max-md:px-5 max-md:pb-24">
      <HeroSection
        title={`discover intelligence of our new ai "avon"`}
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/305bff0b117ada2318b97e8f665d95df65f3aa756805795ba52fe784e4d50655?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
        imageAlt="Avon AI Visualization"
      />
      <CallToAction
        title="hurry up and explore how avon works"
        buttonText="Login"
        onButtonClick={handleLogin}
      />
    </div>
  );
};
