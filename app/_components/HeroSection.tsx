import * as React from "react";
import { HeroSectionProps } from "../types";

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="w-full max-w-[1228px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="self-stretch pl-5 my-auto text-6xl font-bold text-pink-500 uppercase tracking-[5.12px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
