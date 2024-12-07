"use client";

import * as React from "react";
import { CallToActionProps } from "../types";
import { Button } from "./Button";

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col px-16 pt-11 pb-4 mt-20 max-w-full text-4xl font-medium text-center uppercase bg-pink-500 rounded-[40px] tracking-[2.88px] w-[758px] max-md:px-5 max-md:mt-10">
      <div className="text-stone-900 max-md:max-w-full">{title}</div>
      <div className="self-center mt-12 max-md:mt-10">
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </div>
    </div>
  );
};
