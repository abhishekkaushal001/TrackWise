import { Metadata } from "next";
import { getServerSession } from "next-auth";
import dynamicFn from "next/dynamic";
import authOptions from "../auth/authOptions";
import RegisterUserLoadingpage from "./loading";
import { redirect } from "next/navigation";

const RegisterUserPage = dynamicFn(
  () => import("@/app/register/RegisterUser"),
  {
    ssr: false,
    loading: () => <RegisterUserLoadingpage />,
  }
);

const RegistrationPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/me");
  }

  return <RegisterUserPage />;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Register User",
  description: "TrackWise: Create new account.",
};

export default RegistrationPage;
