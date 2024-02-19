// Import necessary libraries and components
import Image from "next/image";
import Link from "next/link";
import sideImage from "@/public/assests/images/backgrounds/slideImage2.jpg";
import Phone from "../../../public/assests/icons/Phone.png";
import WaterMark from "@/public/assests/icons/waterMark.png";
import { useState } from "react";
import { handleSignUp } from "./util/handleSignup";
import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/button/Button";
import EmailRegisterForm from "./EmailSignUpForm_comp";
import PhoneRegisterForm from "./PhoneSignUpForm_comp";
import { useInterestContext } from "@/app/lib/context/interestContext";
import InterestForm from "@/app/components/Interest_comp";
import { signupFormValidation } from "./util/signupFormValidation";

// Define the SignUp component
function SignUp() {
  // Initialize state variables using the useState hook
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const { interest } = useInterestContext();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = {
      username: formData.username,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    };

    // Redirect to the profile page if registered and interests selected
    if (isRegistered && interest) {
      router.push("/profile");
      return;
    }

    // Validate form data and handle sign-up
    const formErrors = signupFormValidation(formDataObject);
    if (Object.keys(formErrors).length === 0) {
      try {
        const userCred = await handleSignUp(formDataObject);
        if (userCred.success) {
          setIsRegistered(true);
        }
      } catch (error) {
        console.error("Error in handleSignUp:", error);
      }
    } else {
      // Display form errors as an alert
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

  // Toggle between phone and email sign-up forms
  const toggleForm = () => {
    setShowPhoneForm(!showPhoneForm);
  };

  // JSX representing the SignUp component
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex pb-4 relative ">
        <div className="hidden md:flex">
          <Image
            width={null}
            height={null}
            className="w-[450px] h-[760px] rounded-[30px] rounded-br-[0px]"
            src={sideImage}
            alt=""
          />
        </div>
        <div className="-mt-[60px] md:mt-0 flex flex-col w-[450px] relative py-8 px-6 h-[760px] bg-white items-center rounded-bl-[0px] rounded-[30px]">
          <div className="text-center ">
            <div className="gap-[5px] ">
              <div className=" h-12 flex items-center justify-center ">
                <Image
                  width={50}
                  height={50}
                  alt="Sign in with Phone"
                  src={WaterMark}
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
                // Display interest form after successful registration
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
                    // Display phone sign-up form
                    <PhoneRegisterForm
                      formData={formData}
                      handleChange={handleChange}
                    />
                  ) : (
                    // Display email sign-up form
                    <EmailRegisterForm
                      formData={formData}
                      handleChange={handleChange}
                    />
                  )}
                </>
              )}
              {!showPhoneForm && (
                <div className="">
                  {/* Display "Continue" button after successful registration */}
                  <Button
                    type="submit"
                    variant="secondary"
                    className={` w-full  ${isRegistered ? "mt-4" : ""}`}
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
                  {/* Display link to login page */}
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

// Export the SignUp component
export default SignUp;
