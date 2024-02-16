import Image from "next/image";
import Link from "next/link";
import google from "../../../public/icons/Google.png";
import Button from "@/app/components/ui/button/Button";

function ForgotPassword() {
  return (
    <form>
      <div className="flex pb-4 relative font-lexend">
        <div className="flex flex-col w-[439px]  py-[60px] h-auto bg-white items-center ">
          <div className=" text-center ">
            <div className="gap-[5px] ">
              <div className="text-black text-center text-[32px] font-medium leading-10">
                Forgot Password
              </div>
              <div className=" text-center text-neutral-600 text-base font-normal  leading-tight">
                Enter your email to reset your password
              </div>
            </div>

            <div className="space-y-[32px]">
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
                <Button variant="secondary" className=" w-full">
                  Continue
                </Button>
              </div>

              <div className="w-80 h-[19px] items-center justify-center  gap-3 inline-flex">
                <div className="w-[130px] h-[0px] rotate-180 border border-neutral-300"></div>
                <div className="text-black text-base font-normal  leading-tight">
                  OR
                </div>
                <div className="w-[130px] h-[0px]  rotate-180 border border-neutral-300"></div>
              </div>
              <div className="flex justify-center gap-3 border border-spacing-2 mt-[22px] px-6 py-3">
                <div className="">
                  <Image
                    width={25}
                    height={25}
                    alt="Sign in with Google"
                    src={google}
                  />
                </div>
                <div className="text-black text-lg font-normal leading-snug ">
                  Sign up with Phone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgotPassword;
