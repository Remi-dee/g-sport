import React from "react";

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
      <div className="md:mt-8 mt-5 text-white text-center">
        <p className="text-xl">Pick Your Avatar</p>
        <p className="text-sm mb-2 md:mb-6">
          To get the best experience, choose at least{" "}
          <span className="text-[#FD429C]">4 </span>
          sports that <br /> interest you
        </p>
        <div className="space-x-3 space-y-2 md:space-x-5 md:space-y-3 w-full">
          {buttonTexts.map((buttonText, index) => (
            <button key={index}>{buttonText}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
