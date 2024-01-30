import HomePage2 from "./HomePage2";
import LandigHomePage from "./LandigHomePage";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  return (
    <>
      <LandigHomePage />
      <HomePage2 />
    </>
  );
}
