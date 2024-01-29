import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";

interface Props {
  searchParams: { page: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <div>
      <div>Hello world</div>
      <LatestIssues />
    </div>
  );
}
