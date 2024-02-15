import Button from "@/app/components/ui/button/Button";
import { appAuth } from "@/app/fireBase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function PhoneRegisterForm({ formData, handleChange }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState("");
  const [otpSent, setOtpSent] = useState(null);

  const router = useRouter();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      appAuth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {},
        "expired-callback": () => {},
      }
    );
  }, [appAuth]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
      console.log(formattedPhoneNumber);
      const confirmation = await signInWithPhoneNumber(
        appAuth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhoneNumber("");
      alert("OTP has been sent");
    } catch (error) {
      console.error(error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const confirm = await confirmationResult.confirm(otp);
      console.log("here is" + confirm);
      setOtp("");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {!otpSent ? <div id="recaptcha-container"></div> : null}
      <label className="block text-sm text-start font-medium text-gray-700">
        Phone Number:
      </label>

      <div className="w-full   gap-1 inline-flex">
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          autoComplete="on"
          className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
          placeholder="Enter number with the country code"
          required
        />
      </div>

      <label className="block text-sm text-start font-medium text-gray-700">
        OTP:
      </label>

      <div className="w-full   gap-1 inline-flex">
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          autoComplete="on"
          className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
          placeholder="Enter otp code"
        />
      </div>
      <Button
        type="button"
        onClick={otpSent ? handleOtpSubmit : handleSendOtp}
        variant={otpSent ? "secondary" : "inverted"}
        className=" w-full"
      >
        {otpSent ? "Verify OTP" : "Send OTP"}
      </Button>
    </div>
  );
}

export default PhoneRegisterForm;
