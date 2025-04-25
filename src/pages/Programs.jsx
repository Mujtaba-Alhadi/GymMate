import ProgramCards from "../components/ProgramCards";
import ProgramData from "../data/ProgramData.json";

function Programs() {
  return (
    <div className="py-8 px-6">
      <h1 className="text-2xl font-bold mb-6">All Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {ProgramData.map((prog, index) => (
          <ProgramCards program={prog} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Programs;
