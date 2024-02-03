import RegisterPageImage from "@/app/components/belem-tower-8492812_1920.jpg";
import { Grid } from "@radix-ui/themes";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

const RegisterUserPage = () => {
  return (
    <Grid columns={{ initial: "1", sm: "2" }} align="center" justify="center">
      <Image
        src={RegisterPageImage}
        alt="Welcome aboard!"
        className=" hidden md:block"
      />
      <RegisterForm />
    </Grid>
  );
};

export default RegisterUserPage;
