import Button from "@/app/components/ui/button/button";
import { appAuth } from "@/app/fireBase/firebase";
import { RecaptchaVerifier } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";

function PhoneRegisterForm({ formData, handleChange }) {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [otp, setOtp] = useState(0);
  const [cofirmResult, setConfirmResult] = useState(0);
  const [otpSent, setOtpSent] = useState(null);

  const router = useRouter;

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      appAuth,
      "sign-in-button",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
        "expired-callback": (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );

    return () => {
      second;
    };
  }, [appAuth]);


  const handlePhoneNumberChange = (e) => {



  }

  const handleOtpChange = (e) => {


    
  }


  const handleSendOtp = (e) => {


    
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="block text-sm text-start font-medium text-gray-700">
        Phone Number:
      </label>

      <div className="w-full   gap-1 inline-flex">
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          autoComplete="on"
          className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
          placeholder="Enter your phone number here"
          required
        />
      </div>

      {/* You can add more fields for name, email, etc., if needed */}

      <Button
        type="button"
        onClick={"handleVerifyOTP"}
        variant="inverted"
        className=" w-full "
      >
        Send OTP
      </Button>

      <label className="block text-sm text-start font-medium text-gray-700">
        OTP:
      </label>

      <div className="w-full   gap-1 inline-flex">
        <input
          type="text"
          value={formData.otp}
          onChange={handleChange}
          autoComplete="on"
          className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
          placeholder="Enter otp code"
        />
      </div>
      <Button
        type="button"
        onClick={"handleVerifyOTP"}
        variant="inverted"
        className=" w-full"
      >
        Verify OTP
      </Button>
    </div>
  );
}

export default PhoneRegisterForm;
