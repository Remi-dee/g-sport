// Import necessary libraries and components
import Image from "next/image";
import Link from "next/link";
import Phone from "../../../public/assests/icons/Phone.png";
import waterMark from "@/public/assests/icons/waterMark.png";
import { handleSignIn } from "./util/handleSignin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneRegisterForm from "../signUp/PhoneSignUpForm_comp";
import { appAuth } from "@/app/fireBase/firebase";
import Button from "@/app/components/ui/button/Button";

// Define the SignIn component
function SignIn() {
  // Initialize state variables using the useState hook
  const router = useRouter();
  const [showPhoneForm, setShowPhoneForm] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    const user = appAuth.currentUser;
    const formDataObject = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const userCred = await handleSignIn(formDataObject);

      if (userCred.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("userSession", user.email);
        }
        router.push("/profile");
      }
    } catch (error) {
      // Handle errors if needed
      console.error("Error in handleSignIn:", userCred.error);
    }
  };

  // Toggle between phone and email sign-in forms
  const toggleForm = () => {
    setShowPhoneForm(!showPhoneForm);
  };

  // JSX representing the SignIn component
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex pb-4 relative font-lexend  md:max-w-full">
        <div className="flex flex-col w-[720px]  py-[60px] h-auto  bg-white items-center ">
          <div className=" text-center ">
            <div className=" h-12 flex items-center justify-center ">
              <Image
                width={60}
                height={50}
                alt="Mestyle Logo"
                src={waterMark}
                className=""
              />
            </div>

            <div className="text-black text-center text-[32px] w-[317px] font-medium leading-10">
              Welcome back to <br /> G-sport
            </div>
            <div className="space-y-[22px]">
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
                  {showPhoneForm ? "Sign in with Email" : "Sign in with Phone"}
                </div>
              </button>
              {showPhoneForm ? (
                // Display phone sign-in form
                <PhoneRegisterForm />
              ) : (
                <>
                  <div className="w-80 h-[19px] items-center justify-center  gap-3 inline-flex">
                    <div className="w-[130px] h-[0px] rotate-180 border border-neutral-300"></div>
                    <div className="text-black text-base font-normal  leading-tight">
                      OR
                    </div>
                    <div className="w-[130px] h-[0px]  rotate-180 border border-neutral-300"></div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="email"
                        className="block text-sm text-start font-medium text-gray-700"
                      >
                        Email
                      </label>

                      <div className="w-full   gap-1 inline-flex">
                        <input
                          value={formData.email}
                          onChange={handleChange}
                          name="email"
                          required
                          id="email"
                          type="text"
                          autoComplete="on"
                          className=" text-zinc-400  py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="password"
                        className="block text-sm text-start font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="w-full gap-1 inline-flex">
                        <input
                          value={formData.password}
                          onChange={handleChange}
                          name="password"
                          required
                          id="password"
                          type="password"
                          autoComplete="on"
                          className=" text-zinc-400  py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
                          placeholder="Enter your password"
                        />
                      </div>{" "}
                      <div className="text-start ">
                        <Link href="/?view=forgotpassword">
                          {/* Display link to forgot password page */}
                          <span className="text-neutral-600 text-base font-normal  leading-tight">
                            Forgot Password?
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Display "Continue" button for sign-in */}
                    <Button variant="secondary" className=" w-full">
                      Continue
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

// Export the SignIn component
export default SignIn;
