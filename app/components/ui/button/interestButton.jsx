import { useInterestContext } from "@/app/lib/interestContext";
import React, { useState } from "react";

function InterestButton({ index, buttonText }) {
  const [isSelected, setIsSelected] = useState(false);
  const { interest, setInterest } = useInterestContext();
  const handleIsSelect = (e) => {
    e.preventDefault();
    setInterest([...interest, buttonText]);
    {
      !isSelected ? setIsSelected(true) : setIsSelected(false);
    }
    console.log(isSelected);
  };

  return (
    <div className="">
      <button
        key={index}
        onClick={handleIsSelect}
        className={` border-2 border-[#DCDCE5] rounded-full  px-2 py-1 md:px-4 md:py-2 md:text-[17px] text-sm   ${
          isSelected ? "bg-[#DCDCE5]" : "bg-transparent"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default InterestButton;
