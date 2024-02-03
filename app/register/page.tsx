import { Metadata } from "next";
import dynamic from "next/dynamic";
import RegisterUserLoadingpage from "./loading";

const RegisterUserPage = dynamic(() => import("@/app/register/RegisterUser"), {
  ssr: false,
  loading: () => <RegisterUserLoadingpage />,
});

const RegistrationPage = () => {
  return <RegisterUserPage />;
};

export const metadata: Metadata = {
  title: "Register User",
  description: "TrackWise: Create new account.",
};

export default RegistrationPage;
