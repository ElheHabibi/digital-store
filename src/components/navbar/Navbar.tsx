import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center flex-row-reverse">
      <ul className="flex space-x-4">
        <li>خانه</li>
        <li>فروشگاه</li>
      </ul>

      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          سبد خرید
        </button>
      </div>
    </div>
  );
}

export default Navbar;
