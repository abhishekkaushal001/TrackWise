import { Metadata } from "next";
import dynamicFn from "next/dynamic";
import RegisterUserLoadingpage from "./loading";

const RegisterUserPage = dynamicFn(
  () => import("@/app/register/RegisterUser"),
  {
    ssr: false,
    loading: () => <RegisterUserLoadingpage />,
  }
);

const RegistrationPage = () => {
  return <RegisterUserPage />;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Register User",
  description: "TrackWise: Create new account.",
};

export default RegistrationPage;
