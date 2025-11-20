function HomePage() {
  const features = [
    {
      title: "Homemade Freshness",
      logo: "🍱",
      description:
        "Every meal is prepared fresh daily using traditional Indian recipes and high-quality ingredients.",
    },
    {
      title: "Affordable Daily Meals",
      logo: "💸",
      description:
        "Healthy home food at prices that fit your budget. Plans starting at just ₹99 per meal.",
    },
    {
      title: "Fast Delivery",
      logo: "⚡",
      description:
        "Hot meals delivered quickly and reliably across Raipur. Right on time, every time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-4 flex flex-col gap-6">

      {/* HERO SECTION */}
      <div className="text-center mt-3">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          Fresh Home-Cooked Meals
        </h1>
        <h2 className="text-3xl font-bold text-orange-500 mt-1">
          Delivered Daily
        </h2>
      </div>

      <p className="text-center text-gray-700 text-lg px-4">
        Experience the warmth of homemade food, cooked with love and delivered
        fresh to your doorstep in Raipur.
      </p>

      {/* CTA BUTTON */}
      <div className="w-full flex justify-center">
        <button className="bg-orange-500 px-6 py-3 rounded-full shadow-md text-white text-lg font-semibold">
          Order Now
        </button>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
      </div>

      {/* FEATURES LIST */}
      <div className="flex flex-col gap-5 mt-2">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-2"
          >
            <div className="text-4xl text-orange-500 text-center">
              {item.logo}
            </div>

            <div className="text-lg font-bold text-center text-gray-900">
              {item.title}
            </div>

            <div className="text-center text-gray-600 text-sm leading-relaxed">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SPACER */}
      <div className="mb-4"></div>

    </div>
  );
}

export default HomePage;
