function BasicPlanCard() {
  return (
    <div
      className="w-72 p-6 rounded-3xl shadow-xl bg-white flex flex-col justify-center items-center gap-5
                 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl 
                 "
    >
      <h2 className="text-2xl font-semibold">Basic</h2>

      <p className="text-3xl font-bold text-orange-500">
        ₹99 <span className="text-base font-medium text-gray-600">per meal</span>
      </p>

      <div className="flex flex-col gap-2 text-gray-700 text-sm w-full">
        <div className="flex items-center gap-2">
          <span>✔</span> 1 Meal per day
        </div>

        <div className="flex items-center gap-2">
          <span>✔</span> Fresh ingredients
        </div>

        <div className="flex items-center gap-2">
          <span>✔</span> Veg/Non-veg options
        </div>
      </div>

      {/* View Details Button */}
      <button
        className="w-full py-3 rounded-full bg-gray-100 font-medium
                   transition-all duration-300 hover:bg-gray-200 hover:shadow-inner"
      >
        View Details
      </button>

      {/* Choose Plan Button */}
      <button
        className="w-full py-3 rounded-full font-medium text-white 
                   bg-orange-500 transition-all duration-300 hover:bg-orange-600
                   hover:shadow-lg active:scale-95"
      >
        Choose Plan
      </button>
    </div>
  );
}

export default BasicPlanCard;
