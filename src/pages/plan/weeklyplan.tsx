import { useState, useMemo } from "react";

export default function WeeklyPlanPage() {
  const [mealType, setMealType] = useState("both");

  const weeklyMenu = [
    {
      day: "Monday",
      lunch: {
        dish: "Dal • Rice • Aloo Fry • Roti",
        calories: "520 kcal",
        protein: "12g",
        spice: "Mild",
      },
      dinner: {
        dish: "Paneer Curry • Jeera Rice • Salad",
        calories: "610 kcal",
        protein: "18g",
        spice: "Medium",
      },
    },
    {
      day: "Tuesday",
      lunch: {
        dish: "Chole • Rice • Mixed Veg • Roti",
        calories: "540 kcal",
        protein: "14g",
        spice: "Medium",
      },
      dinner: {
        dish: "Aloo Matar • Roti • Salad",
        calories: "480 kcal",
        protein: "10g",
        spice: "Mild",
      },
    },
    {
      day: "Wednesday",
      lunch: {
        dish: "Rajma • Rice • Gobi Sabji • Roti",
        calories: "560 kcal",
        protein: "16g",
        spice: "Medium",
      },
      dinner: {
        dish: "Veg Khichdi • Curd • Pickle",
        calories: "450 kcal",
        protein: "12g",
        spice: "Mild",
      },
    },
    {
      day: "Thursday",
      lunch: {
        dish: "Veg Biryani • Raita • Salad",
        calories: "600 kcal",
        protein: "15g",
        spice: "Medium",
      },
      dinner: {
        dish: "Dal Tadka • Rice • Roti",
        calories: "520 kcal",
        protein: "14g",
        spice: "Medium",
      },
    },
    {
      day: "Friday",
      lunch: {
        dish: "Kadhi • Rice • Bhindi Fry • Roti",
        calories: "510 kcal",
        protein: "11g",
        spice: "Low",
      },
      dinner: {
        dish: "Mix Veg Curry • Roti • Salad",
        calories: "480 kcal",
        protein: "10g",
        spice: "Low",
      },
    },
    {
      day: "Saturday",
      lunch: {
        dish: "Sambar • Rice • Aloo Beans • Roti",
        calories: "530 kcal",
        protein: "13g",
        spice: "Medium",
      },
      dinner: {
        dish: "Paneer Masala • Roti • Salad",
        calories: "620 kcal",
        protein: "19g",
        spice: "Medium",
      },
    },
    {
      day: "Sunday",
      lunch: {
        dish: "Special Veg Thali (Dal • Sabji • Rice • Roti)",
        calories: "650 kcal",
        protein: "18g",
        spice: "Low",
      },
      dinner: {
        dish: "Veg Pulao • Raita • Salad",
        calories: "500 kcal",
        protein: "12g",
        spice: "Low",
      },
    },
  ];

  const filteredMenu = useMemo(() => {
    return weeklyMenu.map((item) => ({
      day: item.day,
      lunch: mealType === "lunch" || mealType === "both" ? item.lunch : null,
      dinner: mealType === "dinner" || mealType === "both" ? item.dinner : null,
    }));
  }, [mealType]);

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-4 pb-10">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold text-gray-900">Weekly Meal Plan</h1>
        <p className="text-gray-600 text-sm mt-1">
          2 meals per day • Fresh • Balanced • Home-style
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-3 mb-6">
        {["lunch", "dinner", "both"].map((t) => (
          <button
            key={t}
            onClick={() => setMealType(t)}
            className={`px-5 py-2 rounded-full shadow-md text-sm font-medium ${
              mealType === t
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {t === "lunch" ? "Lunch " : t === "dinner" ? "Dinner " : "Both"}
          </button>
        ))}
      </div>

      {/* GRID VIEW (NO SCROLLING) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {filteredMenu.map((item, idx) => (
         <div className="bg-white p-5 rounded-2xl shadow-md">

  {/* DAY */}
  <h2 className="text-lg font-bold text-gray-900 text-center mb-4">
    {item.day}
  </h2>

  {/* MEALS WRAPPER — HORIZONTAL */}
  <div className="flex flex-col gap-4">

    {/* LUNCH */}
    {item.lunch && (
      <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-1">
          <span className="text-orange-600 font-bold text-sm">Lunch</span>
          <span className="text-gray-600 text-sm font-semibold">
            {item.lunch.calories}
          </span>
        </div>

        <p className="text-gray-900 font-medium">
          {item.lunch.dish}
        </p>

        {/* NUTRITION ROW */}
        <div className="flex gap-4 text-sm mt-2 font-semibold text-gray-700">
          <span>Protein: {item.lunch.protein}</span>
          <span>Spice: {item.lunch.spice}</span>
        </div>
      </div>
    )}

    {/* DINNER */}
    {item.dinner && (
      <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-1">
          <span className="text-orange-600 font-bold text-sm">Dinner</span>
          <span className="text-gray-600 text-sm font-semibold">
            {item.dinner.calories}
          </span>
        </div>

        <p className="text-gray-900 font-medium">
          {item.dinner.dish}
        </p>

        {/* NUTRITION ROW */}
        <div className="flex gap-4 text-sm mt-2 font-semibold text-gray-700">
          <span>Protein: {item.dinner.protein}</span>
          <span>Spice: {item.dinner.spice}</span>
        </div>
      </div>
    )}

  </div>
</div>

        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="mt-8">
        <button className="w-full py-4 bg-orange-500 text-white rounded-full text-lg font-semibold shadow-md">
          Back to Order Page
        </button>
      </div>
    </div>
  );
}
