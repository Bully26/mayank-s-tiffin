function navBar (){

    const classfornav = "bg-red-300 flex justify-center items-center max-h-full";

    return (
      <div className="flex flex-row flex-12 justify-around  bg-orange-500 sticky top-0 z-50">
       <div >
       <div className="w-full flex justify-center">
        logo
       </div>
        <div>
            Ghar ka khana
        </div>
       </div>
       <div className={classfornav}>
        Menu
       </div>
       <div className="bg-red-300 flex justify-center items-center max-h-full">
          <span>
            Place Order
          </span>
       </div>
       
      </div>

    );


}

export default navBar;