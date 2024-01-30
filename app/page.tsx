import LandigHomePage from "./LandigHomePage";
import Logo from "./components/Logo";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  return (
    <>
      <LandigHomePage />
      <Logo />
    </>
  );
}
