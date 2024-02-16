import Image from "next/image";
import Link from "next/link";

import google from "@/public/icons/Google.png";

import waterMark from "@/public/icons/waterMark.png";
import { handleSignIn } from "./util/handleSignin";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/button/Button";
import PhoneRegisterForm from "../signUp/PhoneSignUpForm_comp";
function SignIn() {
  const router = useRouter();
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const userCred = await handleSignIn(formDataObject);
      console.log("here is" + userCred.success);
      if (userCred.success) {
        router.push("/profile");
      }
    } catch (error) {
      // Handle errors if needed
      console.error("Error in handleSignUp:", userCred.error);
    }
  };

  const toggleForm = () => {
    setShowPhoneForm(!showPhoneForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex pb-4 relative font-lexend">
        <div className="flex flex-col w-[439px]  py-[60px] h-auto bg-white items-center ">
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
                    src={google}
                  />
                </div>
                <div className="text-black text-lg font-normal leading-snug">
                  {showPhoneForm ? "Sign in with Email" : "Sign in with Phone"}
                </div>
              </button>
              {showPhoneForm ? (
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
                          <span className="text-neutral-600 text-base font-normal  leading-tight">
                            Forgot Password?
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
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

export default SignIn;
