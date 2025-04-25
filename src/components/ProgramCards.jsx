function ProgramCards({ program }) {
  return (
    <div className="lg:max-w-96 bg-white shadow-md border rounded-2xl overflow-hidden p-4 flex flex-col gap-2 justify-between hover:scale-[1.02] transition-transform duration-200">
      <a href="">
        <img
          src={program.thumbnail}
          alt={program.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </a>
      <h3 className="text-xl font-bold">{program.title}</h3>
      <p className="text-gray-600 text-sm">{program.description}</p>
      <p className="text-sm text-gray-500 font-medium">
        Trainer:{" "}
        <a href="" className="text-black hover:text-[#57A63D] hover:underline">
          {program.trainer}
        </a>
      </p>
      <div className="flex items-center gap-1 text-gray-500 text-sm">
        <img src="../../public/star-solid.svg" alt="star" className="w-4 h-4" />
        <span>
          <span className="font-bold text-black">{program.rating}</span> ·{" "}
          {program.reviews} reviews
        </span>
      </div>
      <h3 className="text-lg font-semibold text-[#57A63D]">{program.price}</h3>
    </div>
  );
}

export default ProgramCards;
