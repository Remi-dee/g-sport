import Image from "next/image";
import Link from "next/link";
import sideImage from "@/public/images/backgrounds/signupBackground.png";
import Phone from "../../../public/assests/icons/Phone.png";


import waterMark from "@/public/icons/waterMark.png";
import { useState } from "react";
import { handleSignUp } from "./util/handleSignup";

import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/button/Button";
import EmailRegisterForm from "./EmailSignUpForm_comp";
import PhoneRegisterForm from "./PhoneSignUpForm_comp";
import { useInterestContext } from "@/app/lib/interestContext";
import InterestForm from "@/app/components/Interest_comp";
import { signupFormValidation } from "./util/signupFormValidation";

function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const { interest } = useInterestContext();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    if (isRegistered && interest) {
      router.push("/profile");
      return;
    }

    const formErrors = signupFormValidation(formDataObject);

    if (Object.keys(formErrors).length === 0) {
      try {
        const userCred = await handleSignUp(formDataObject);
        console.log("here is" + userCred.success);
        if (userCred.success) {
          setIsRegistered(true);
        }
      } catch (error) {
        console.error("Error in handleSignUp:", error);
      }
    } else {
      const alertMessage = [
        formErrors.username && `Username: ${formErrors.username}`,
        formErrors.email && `Email: ${formErrors.email}`,
        formErrors.password && `Password: ${formErrors.password}`,
      ]
        .filter(Boolean)
        .join("\n");

      alert(alertMessage);
    }
  };

  const toggleForm = () => {
    setShowPhoneForm(!showPhoneForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex pb-4 relative  ">
        <div className="">
          <Image
            width={392}
            height={736}
            className="w-[350px] h-[650px]"
            src={sideImage}
            alt=""
          />
        </div>
        <div className="flex flex-col w-[420px] relative py-8 px-6 h-[650px] bg-white items-center ">
          <div className=" text-center ">
            <div className="gap-[5px] ">
              <div className=" h-12 flex items-center justify-center ">
                <Image
                  width={60}
                  height={50}
                  alt="Sign in with Google"
                  src={waterMark}
                  className=""
                />
              </div>
              <div className="text-black text-center text-[32px] font-medium leading-10">
                Welcome to G-Sport
              </div>
              <div className=" text-center text-neutral-600 text-base font-normal  leading-tight">
                Unleash the Champion Within🤾
              </div>
            </div>

            <div className="space-y-[22px]">
              {isRegistered ? (
                <InterestForm />
              ) : (
                <>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="flex justify-center z-20 bg-white gap-3 border border-spacing-2 mt-[22px]  py-3 w-full"
                  >
                    <div className="">
                      <Image
                        width={25}
                        height={25}
                        alt="Sign in with Google"
                        src={Phone}
                      />
                    </div>
                    <div className="text-black text-lg font-normal leading-snug">
                      {showPhoneForm
                        ? "Sign up with Email"
                        : "Sign up with Phone"}
                    </div>
                  </button>

                  <div className="w-80 h-[19px] items-center  gap-3 inline-flex">
                    <div className="w-[136px] h-[0px] rotate-180 border border-neutral-300"></div>
                    <div className="text-black text-base font-normal  leading-tight">
                      OR
                    </div>
                    <div className="w-[136px] h-[0px]  rotate-180 border border-neutral-300"></div>
                  </div>

                  {showPhoneForm ? (
                    <PhoneRegisterForm
                      formData={formData}
                      handleChange={handleChange}
                    />
                  ) : (
                    <EmailRegisterForm
                      formData={formData}
                      handleChange={handleChange}
                    />
                  )}
                </>
              )}
              {!showPhoneForm && (
                <div className="">
                  <Button
                    type="submit"
                    variant="secondary"
                    className=" w-full "
                  >
                    {isRegistered ? "Continue" : "Next"}
                  </Button>
                </div>
              )}

              <div className="text-start">
                <span className="text-neutral-600 text-base font-normal  leading-tight">
                  Already a member?
                </span>

                <Link href="/?view=signin">
                  <span className="text-neutral-600 text-base font-normal underline leading-tight">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
