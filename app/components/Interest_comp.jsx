import React, { useState } from "react";
import InterestButton from "./ui/button/interestButton";

function InterestForm() {
  const buttonTexts = [
    "Football⚽️",
    "Basketball🏀",
    "Ice Hockey🏑",

    "Motorsports",
    "Bandy",
    "Rugby🏉",
    "Skiing🎿",
    "Shooting",
  ];

  return (
    <div>
      <div className="md:mt-8 mt-5  text-center max-w-full">
        <p className="text-xl underline underline-offset-3 text-gray-500">
          Pick Your Interest
        </p>
        <p className="text-sm mb-2 md:mb-6">
          Enjoy the best experience, choose at least{" "}
          <span className="text-[#FD429C]">4 </span>
          sports that <br /> interest you
        </p>
        <div className="grid grid-cols-2 space-x-3 space-y-2 md:space-x-5 md:space-y-3   ">
          {buttonTexts.map((buttonText, index) => (
            <InterestButton key={index} buttonText={buttonText} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
