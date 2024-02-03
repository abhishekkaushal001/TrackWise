import RegisterPageImage from "@/app/components/belem-tower-8492812_1920.jpg";
import { Grid } from "@radix-ui/themes";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

const RegisterUserPage = () => {
  return (
    <Grid
      columns={{ initial: "1", sm: "2" }}
      align="center"
      justify="center"
      className="-mt-10 md:-mb-16"
    >
      <Image
        src={RegisterPageImage}
        alt="Welcome aboard!"
        className="hidden md:block"
        style={{ maxHeight: "780px", objectFit: "cover" }}
      />
      <RegisterForm />
    </Grid>
  );
};

export default RegisterUserPage;
