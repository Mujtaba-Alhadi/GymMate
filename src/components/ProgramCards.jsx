import { Link } from "react-router-dom";

function ProgramCards({ program }) {
  return (
    <div className="lg:max-w-96 bg-white shadow-md border rounded-2xl overflow-hidden p-4 flex flex-col gap-2 justify-between hover:scale-[1.02] transition-transform duration-200">
      <Link to={`/programs/${program.id}`}>
        <img
          src={program.thumbnail}
          alt={program.title}
          className="object-cover w-full h-48 rounded-xl"
        />
      </Link>
      <h3 className="text-xl font-bold">{program.title}</h3>
      <p className="text-sm text-gray-600">{program.description}</p>
      <p className="text-sm font-medium text-gray-500">
        Trainer:{" "}
        <a href="" className="text-black hover:text-[#57A63D] underline">
          {program.trainer}
        </a>
      </p>
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <img src="../../public/star-solid.svg" alt="star" className="w-4 h-4" />
        <span className="font-bold text-black">{program.rating}</span> ·{" "}
        <span>{program.reviews} reviews</span>
      </div>
      <h3 className="text-lg font-semibold text-[#57A63D]">{`$${program.price}`}</h3>
    </div>
  );
}

export default ProgramCards;
