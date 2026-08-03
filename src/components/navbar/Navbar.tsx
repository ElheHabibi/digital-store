import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <Container>
        <div className="p-4 flex justify-between items-center flex-row-reverse">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                خانه
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-gray-400">
                فروشگاه
              </Link>
            </li>
          </ul>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              سبد خرید
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
