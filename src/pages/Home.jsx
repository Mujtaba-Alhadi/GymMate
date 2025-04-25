import ProgramCards from "../components/ProgramCards.jsx";
import ProgramData from "../data/ProgramData.json";
import { Link } from "react-router-dom";
function Home() {
  const preview = ProgramData.slice(0, 3); // Show 3 courses on homepage
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xlg:gap-0 py-6 px-10">
        {preview.map((prog, index) => (
          <ProgramCards program={prog} key={index} />
        ))}
      </div>
      <div className="text-center w-fit mx-auto my-5">
        <Link
          to="/programs"
          className="px-6 py-2 rounded-full text-white bg-[#57A63D] hover:bg-[#58D62E] transition duration-300"
        >
          See More
        </Link>
      </div>
    </>
  );
}

export default Home;
