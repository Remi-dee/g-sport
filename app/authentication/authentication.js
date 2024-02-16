import { useRouter, useSearchParams } from "next/navigation";
import SignIn from "./signIn/SignInForm_comp";
import { Modal } from "../lib/modal/modal";
import ForgotPassword from "./forgotPassword/ForgotPassword_comp";

function Authentication() {
  const view = useSearchParams().get("view");
  const router = useRouter();

  return (
    <div className=" font-lexend">
      <>
        <div>
          {view == "signin" ? (
            <Modal
              onClose={() => {
                router.push("/");
              }}
            >
              <SignIn
                onClose={() => {
                  router.push("/");
                }}
              />
            </Modal>
          ) : view == "forgotpassword" ? (
            <Modal
              onClose={() => {
                router.push("/");
              }}
            >
              <ForgotPassword
                onClose={() => {
                  router.push("/");
                }}
              />
            </Modal>
          ) : (
            <div></div>
          )}
        </div>
      </>
    </div>
  );
}

export default Authentication;
