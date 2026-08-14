import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

function Navbar() {
  const { cartQty } = useShoppingCartContext();
  const { handleLogout, isLogin } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 shadow-sm sticky top-0 z-50 bg-white">
      <div className="px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4 mx-auto max-w-7xl">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 flex-shrink-0"
          >
            Digital Store
          </Link>

          <ul className="hidden items-center gap-6 md:flex absolute left-1/2 transform -translate-x-1/2">
            <li>
              <Link
                to="/"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                Store
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/cart"
              className="relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 sm:p-3 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 flex-shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="-51.2 -51.2 614.40 614.40"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-label="Cart"
                className="sm:w-5 sm:h-5"
              >
                <path d="M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z"></path>
              </svg>

              {cartQty !== 0 ? (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 text-[9px] sm:text-[10px] font-semibold text-white">
                  {cartQty}
                </span>
              ) : null}
            </Link>

            {isLogin ? (
              <button
                onClick={handleLogout}
                className="hidden sm:inline-block rounded-lg border border-blue-600 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white flex-shrink-0"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden sm:inline-block rounded-lg border border-blue-600 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white flex-shrink-0"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-3 sm:pb-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-2 pt-3 sm:pt-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 hover:bg-slate-50 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 hover:bg-slate-50 rounded"
                >
                  Store
                </Link>
              </li>
              <li className="border-t border-slate-200 pt-3">
                {isLogin ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 rounded"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 rounded"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
