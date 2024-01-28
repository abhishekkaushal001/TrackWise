import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      Hello world
      <Pagination itemCount={100} currentPage={2} pagesize={10} />
    </div>
  );
}
