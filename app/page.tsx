import { Card } from "@radix-ui/themes";
import HomePage2 from "./HomePage2";
import LandigHomePage from "./LandigHomePage";
import Logo from "./components/Logo";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  return (
    <>
      <LandigHomePage />
      <Card className=" shadow-slate-400 shadow-lg">
        <HomePage2 />
      </Card>
    </>
  );
}
