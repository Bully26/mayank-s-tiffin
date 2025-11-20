import OrderCard from "./ordercard"

function Order() {
  return (
     <div className="flex flex-col items-center gap-y-5 bg-red-600 pt-5">
    
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>


      </div>
      
  );
}

export default Order;
