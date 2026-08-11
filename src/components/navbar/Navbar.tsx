import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
  const { cartQty } = useShoppingCartContext();
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

          <Link to="/cart">
            <div className="relative">
              <span>

                <svg width="50px" height="50px" viewBox="-51.2 -51.2 614.40 614.40" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.000512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="14.336000000000002"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z"></path></g></svg>

              </span>
              {cartQty !== 0 ? (
                <span className="absolute rounded-full bg-red-600 text-white px-2 top-0 right-0 index">
                  {cartQty}
                </span>
              ) : null}
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
