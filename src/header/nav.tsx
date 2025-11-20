
const some  = (
 <div className="sticky top-0 z-50 bg-white shadow-sm">
  <div className="flex items-center justify-center px-4 py-3 relative">

    <div className="flex gap-6 text-gray-700 font-medium text-sm">
      <a href="/home" className="text-orange-500 transition">Home</a>
      <a href="/menu" className="hover:text-orange-500 transition">Menu</a>
      <a href="/weekly-plan" className="hover:text-orange-500 transition">Weekly Plan</a>
      <a href="/order" className="hover:text-orange-500 transition">Order</a>
    </div>

    

  </div>
</div>


)

export default function MobileNavbar() {
  return some;
}
