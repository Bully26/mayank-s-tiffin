import HomePage from "./pages/home/home.tsx";
import NavBar from "./header/nav.tsx";
import Order from "./pages/order/order.tsx";
import Final from "./pages/orderDetail/final.tsx"
import Plan from "./pages/plan/weeklyplan.tsx"

function App() {
  return (
    <div className="w-screen min-h-screen bg-blue-200">
      <NavBar />
      {/* <Plan></Plan> */}
      {/* <Final/> */}
      {/* <HomePage /> */}
      <Order/>
      
    </div>
  );
}

export default App;
