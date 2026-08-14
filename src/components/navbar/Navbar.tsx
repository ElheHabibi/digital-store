import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useAuthContext } from "../../context/AuthContext";

function Navbar() {
  const { cartQty } = useShoppingCartContext();
  const { handleLogout } = useAuthContext();

  return (
    <nav className="border-b border-slate-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-slate-900"
            >
              Digital Store
            </Link>

            <ul className="hidden items-center gap-6 md:flex">
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
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <svg
                width="22"
                height="22"
                viewBox="-51.2 -51.2 614.40 614.40"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-label="Cart"
              >
                <path d="M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z"></path>
              </svg>

              {cartQty !== 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
                  {cartQty}
                </span>
              ) : null}
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
