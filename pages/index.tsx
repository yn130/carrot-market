export default function Home() {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-5 grid gap-10 lg:grid-cols-2  xl:grid-cols-3 min-h-screen">
      {/* Select Item */}
      <div className="bg-white sm:hover:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 p-10 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        {/* <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div> */}
        {/* <div className="flex justify-between">
          <span className="text-gray-500">Tooly Tabler</span>
          <span className="font-semibold">$80</span>
        </div> */}

        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 by-2 empty:bg-blue-50" key={i}>{c}</li>
          ))}  
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <button 
        className="mt-5 bg-blue-500 text-white p-3 
        text-center rounded-xl w-2/4 mx-auto
        hover:bg-teal-400 hover:text-black
        active:bg-yellow-500 
        focus:text-red-500
        ">
          Checkout
        </button>
      </div>
      {/* Profile */}
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 portrait:bg-indigo-300 landscape:bg-pink-400">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between" >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-300 rounded-full group-hover:bg-red-300 transition-colors"/>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>

        </div>
        {/* Stuff  */}
      <div className="bg-white p-6 rounded-3xl shadow-xl ">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">🩷</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-80 mb-5"/>
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-ms text-gray-500">chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">Add to cart</button>
          </div>
        </div>
      </div>
      {/* modifiers for Forms */}
      <div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-3 xl:col-span-1">
        <form className="flex flex-col space-y-2 p-5">
          <input type="text"
            required
            placeholder="Username"
            className="border p-1 peer border-gray-400 rounded-md"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">This input is invalid</span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">Awesome Username</span>
          <span className="hidden peer-hover:block peer-hover:text-amber-500">Hello</span>
          <input type="submit" value="Login" className="bg-white"/>
        </form>
        
      </div>
    </div>
  );
}
