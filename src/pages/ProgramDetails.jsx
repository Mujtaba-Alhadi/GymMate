import { useParams } from "react-router-dom";
import ProgramData from "../data/ProgramData.json";
import { loadStripe } from "@stripe/stripe-js";

function ProgramDetails() {
  const { id } = useParams();
  const program = ProgramData.find((p) => p.id == id);
  if (!program) return <p>Program not found</p>;
  
  const handleCheckout = async () => {
    const stripePromise = loadStripe("pk_test_51RIWZDRorbrH2gFMPPZ6V7x8kHctZXkp8VlxCGSnobawQfi5QRklxaOjmmd9g4Wm73dAnRHqJDrOZmwGct8enzOD00Dlhe2DBB");
    const stripe = await stripePromise;

    // Send the selected program's information to the backend
    const response = await fetch('http://localhost:5173/create-checkout-session', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: program.title,
        price: program.price,
        description: program.description,
        id: program.id
      }),
    });

    const session = await response.json();

    // Redirect the user to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
      alert('Payment failed. Please try again.');
    }
  };
  
  return (
    <>
      <div className="md:flex bg-[#B4C40C] px-10 lg:px-14 py-6 w-full text-white">
        <div className="text-center mb-7 md:mb-0 lg:p-7 md:w-3/5 md:text-left">
          <h3 className="mb-4 text-3xl font-bold lg:mb-6 lg:text-4xl">
            {program.title}
          </h3>
          <p className="mb-5 lg:mb-8 md:text-lg lg:text-xl">
            {program.description}
          </p>
          <div className="flex items-center justify-center gap-1 mb-2 text-sm font-medium md:justify-normal lg:mb-4 lg:text-md">
            <span className="bg-white px-1.5 py-0.5 rounded-md text-[#B4C40C] text-xs lg:text-sm">
              Bestseller
            </span>
            <img src="/star-solid.svg" alt="star" className="w-4 h-4" />
            <span className="font-bold">{program.rating}</span> ·{" "}
            <span>{program.reviews} reviews</span>
          </div>
          <p className="text-sm lg:text-md">
            Trainer:{" "}
            <a href="" className="underline">
              {program.trainer}
            </a>
          </p>
        </div>
        <div className="w-64 mx-auto text-black bg-white rounded-lg overflow-hidden shadow-lg md:top-5 lg:top-10 md:right-10 lg:right-20 md:absolute md:w-fit">
          <img
            src={program.thumbnail}
            alt={program.title}
            className="w-full md:h-36 lg:h-52"
          />
          <div className="p-4 lg:p-5">
            <h3 className="text-2xl font-semibold lg:text-3xl">
              {`$${program.price}`}
            </h3>
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 lg:gap-4 lg:mt-5 lg:text-md">
              <div className="flex items-center gap-1">
                <img
                  src="/star-solid.svg"
                  alt="star"
                  className="w-4"
                />
                <span>{program.rating}</span>
              </div>
              |
              <div className="flex items-center gap-1">
                <img
                  src="/clock-regular.svg"
                  alt="clock"
                  className="w-3 lg:w-4"
                />
                <span>{`${program.duration} hours`}</span>
              </div>
              |
              <div className="flex items-center gap-1">
                <img src="/book-solid.svg" alt="book" className="w-3 lg:w-4" />
                <span>{`${program.lecturesNum} lectures`}</span>
              </div>
            </div>
            <button onClick={handleCheckout} className="bg-[#57A63D] hover:bg-[#58D62E] mt-3.5 lg:mt-5 p-1.5 lg:p-2 rounded-md w-full text-white lg:text-md text-sm transition duration-300">
              Enroll Now
            </button>
            <h3 className="mt-3 mb-2 font-bold lg:mt-5 lg:mb-3 text-md lg:text-xl">
              This course includes:
            </h3>
            <ul className="ml-4 text-xs font-medium text-gray-500 list-disc lg:text-sm">
              <li>Full life-time access</li>
              <li>30-Day Money-Back Guarantee</li>
              <li>{program.duration} hours on-demand video</li>
              <li>Access on mobile and TV</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-6 lg:my-10 px-10 lg:px-20 md:pr-[40%] lg:pr-[50%]">
        <h3 className="mb-3 text-lg font-bold lg:text-2xl">Description</h3>
        <p className="text-xs lg:text-md">{program.detailedDescription}</p>
      </div>
    </>
  );
}

export default ProgramDetails;
