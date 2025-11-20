function BasicPlanCard() {
  return (
    <div
      className="w-72 p-7 rounded-3xl shadow-lg bg-white 
                 flex flex-col justify-center items-center gap-6
                 border border-orange-100
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
        Basic
      </h2>

      {/* Price */}
      <p className="text-4xl font-extrabold text-orange-500">
        ₹99{" "}
        <span className="text-base font-medium text-gray-500">
          per meal
        </span>
      </p>

      {/* Features */}
      <div className="flex flex-col gap-3 text-gray-700 text-sm w-full px-1">

        <div className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-orange-400 rounded-full"></span>
          <p className="leading-tight">1 freshly prepared meal daily</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-orange-400 rounded-full"></span>
          <p className="leading-tight">Made with premium ingredients</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-orange-400 rounded-full"></span>
          <p className="leading-tight">Choose Veg or Non-Veg</p>
        </div>

      </div>

      {/* View Details Button */}
      <button
        className="w-full py-3 rounded-full bg-gray-100 font-medium text-gray-800
                   transition-all duration-200 hover:bg-gray-200 hover:shadow-inner"
      >
        View Details
      </button>

      {/* Choose Plan Button */}
      <button
        className="w-full py-3 rounded-full font-semibold text-white text-base
                   bg-orange-500 transition-all duration-300 hover:bg-orange-600
                   hover:shadow-lg active:scale-95"
      >
        Choose Plan
      </button>
    </div>
  );
}

export default BasicPlanCard;
