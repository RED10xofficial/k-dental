import Link from "next/link";

const BookingSuccessPage = () => {
  return (
    <div className="bg-white h-[calc(100vh-200px)] w-full flex flex-col items-center justify-center">
      {/* <img src="success.gif" alt="success" className="w-20 object-contain" /> */}
      <h1 className="text-6xl font-bold text-gray-500 mb-3">Thank You!</h1>
      <h1 className="text-2xl font-bold">Booking Successful</h1>
      <p className="text-gray-500">
        Your booking has been confirmed. You will receive an email or call with
        the details.
      </p>
      <Link href="/" className="mt-4">
        <button className="bg-transparent border border-gray-500 cursor-pointer text-gray-500 px-4 py-2 rounded-full hover:bg-gray-500 hover:text-white transition-all duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default BookingSuccessPage;
