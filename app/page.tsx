import Pagination from "./components/Pagination";

interface Props {
  searchParams: { page: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <div>
      Hello world
      <Pagination
        itemCount={100}
        currentPage={parseInt(searchParams.page) || 1}
        pagesize={10}
      />
    </div>
  );
}
