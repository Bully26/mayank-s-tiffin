function homePage() {
  const features = [
    {
      title: "Homemade Freshness",
      logo: "some",
      description:
        "Every meal is prepared fresh daily using traditional Indian recipes and the finest ingredients.",
    },
    {
      title: "Affordable Daily Meals",
      logo: "some",
      description:
        "Quality home food at prices that won't break the bank. Starting at just ₹99 per meal.",
    },
    {
      title: "Fast Delivery",
      logo: "some",
      description:
        "Quick and reliable delivery service across Raipur. Hot meals delivered right on time.",
    },
  ];

  return (
    <div className=" m-2 flex flex-col justify-center gap-2">
      <div className="flex flex-col justify-center text-3xl text-center bg-orange-100p-4">
        <span className="font-bold"> Fresh Home-Cooked Meals</span>
        <span className="font-bold text-orange-200"> Delivered Daily</span>
      </div>

      <div className="flex justify-center text-xl text-center bg-orange-100 p-4 font-stretch-75%">
        Experience the warmth of home-cooked food, prepared with love and
        delivered fresh to your doorstep in Raipur.
      </div>

      <div className="w-full flex justify-center">
        <button className="bg-orange-500 p-3 rounded-2xl">
          <span className="font-bold text-orange-800">Order Now</span>
        </button>
      </div>

      <div className="w-full flex justify-center">
        <span className="font-bold text-2xl">Why Choose Us</span>
      </div>

       <div className="flex flex-col w-full gap-4">
            {
              features.map((item)=>
              (
                <div className="w-full bg-red-300 rounded-2xl ">
              <div  className="flex justify-around ">
                   {item.logo}
              </div>
              <div className="flex justify-around font-bold p-1 text-xl">
                {item.title}

              </div>
              <div className="flex justify-around font-light font-stretch-75% text-center mb-2 text-xl ">
                 {item.description}
             

              </div>
            </div>
              ))

            }
          </div> 

      <div className="flex flex-col w-full"></div>
    </div>
  );
}

export default homePage;
