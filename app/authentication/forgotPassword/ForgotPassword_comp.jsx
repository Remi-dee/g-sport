import Image from "next/image";

import google from "../../../public/icons/Google.png";
import Button from "@/app/components/ui/button/Button";
import { useState } from "react";
import { handlePasswordReset } from "./util/forgotPassword";
import { useRouter } from "next/navigation";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();

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
    };

    try {
      const emailSent = await handlePasswordReset(formDataObject.email);
      if (emailSent.success) setIsEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, error: error.message };
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex pb-4 relative font-lexend">
        <div className="flex flex-col w-[439px]  py-[60px] h-auto bg-white items-center ">
          <div className=" text-center ">
            <div className="gap-[5px] ">
              <div className="text-black text-center text-[32px] font-medium leading-10">
                Forgot Password
              </div>
              <div className=" text-center text-neutral-600 text-base font-normal  leading-tight max-w-[90%] mx-auto mt-1">
                {isEmailSent
                  ? "Reset your password with the link sent to your email and sign in with your new password"
                  : "Enter your email to reset your password"}
              </div>
            </div>

            <div className="space-y-[32px]">
              {!isEmailSent && (
                <>
                  <div className="flex flex-col gap-3 pt-6">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="email"
                        className="block text-sm text-start font-medium text-gray-700"
                      >
                        Email Adress
                      </label>

                      <div className="w-full   gap-1 inline-flex">
                        <input
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          id="email"
                          type="text"
                          autoComplete="on"
                          className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      variant="secondary"
                      className=" w-full"
                    >
                      Continue
                    </Button>
                  </div>
                </>
              )}

              {isEmailSent && (
                <Button
                  type="button"
                  onClick={() => router.push("/?view=signin")}
                  variant="secondary"
                  className=" w-full  max-w-[90%] mx-auto mt-5"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgotPassword;
