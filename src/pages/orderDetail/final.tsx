import { useState, useMemo } from "react";

export default function PlaceOrderPage() {
  const pricePerDay = 120;

  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState(10);
  const [customMode, setCustomMode] = useState(false);

  const totalPrice = useMemo(() => days * pricePerDay, [days]);

  return (
    <div className=" flex flex-col min-h-screen bg-[#FFF8F2] p-4 pb-10">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
      <h1 className="text-2xl font-bold text-gray-900 text-center justify-center w-full">Final Order</h1>
      
      </div>

      {/* SUMMARY CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-5">
        <h2 className="text-xl font-semibold text-gray-900">Your Plan</h2>

        <p className="text-3xl font-bold text-orange-500 mt-2">
          ₹{pricePerDay}
          <span className="text-base text-gray-600"> per day</span>
        </p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✓</span> Fresh home-cooked meal
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✓</span> Rotating menu
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✓</span> On-time delivery
          </li>
        </ul>

        <button className="w-full mt-5 py-3 bg-gray-200 text-gray-700 rounded-full font-medium">
          View Details
        </button>
      </div>

      {/* START DATE */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-5">
        <h2 className="text-lg font-semibold">Choose Start Date</h2>
        <input
          type="date"
          value={startDate}
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-3 p-3 border rounded-xl w-full bg-gray-50"
        />
      </div>

      {/* SLIDER CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-5">
        <h2 className="text-lg font-semibold">Select Duration</h2>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700 font-medium p-2">Days: {days}</span>
          <button
            onClick={() => setCustomMode(!customMode)}
            className="text-white font-bold text-sm bg-orange-400 p-2 rounded-2xl"
          >
            {customMode ? "Use Slider" : "Custom Input"}
          </button>
        </div>

        {/* SMOOTH SLIDER (5 → 60 days) */}
        {!customMode && (
          <>
            <input
              type="range"
              min={5}
              max={60}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full mt-4 accent-orange-500"
            />

            {/* Tick values */}
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5</span>
              <span>15</span>
              <span>30</span>
              <span>45</span>
              <span>60</span>
            </div>
          </>
        )}

        {/* CUSTOM INPUT */}
        {customMode && (
          <input
            type="number"
            min={5}
            max={180}
            placeholder="Enter number of days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="mt-4 p-3 border rounded-xl w-full bg-gray-50"
          />
        )}
      </div>

      {/* PRICE SUMMARY */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-5">
        <h2 className="text-lg font-semibold">Price Summary</h2>

        <div className="flex justify-between mt-3 text-gray-700">
          <span>Total Days</span>
          <span>{days}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Price Per Day</span>
          <span>₹{pricePerDay}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold text-xl">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      {/* CTA BUTTON */}
      <button className="w-full bg-orange-500 text-white py-4 rounded-full text-lg font-semibold shadow-md">
        Place Order
      </button>
    </div>
  );
}
