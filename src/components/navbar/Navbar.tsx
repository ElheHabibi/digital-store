import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useAuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

function Navbar() {
  const { cartQty } = useShoppingCartContext();
  const { handleLogout, isLogin } = useAuthContext();

  return (
    <nav className="bg-background text-foreground sticky top-0 z-10 border-b border-border">
      <Container>
        <div className="flex items-center justify-between gap-3 py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-6 sm:h-8 w-auto" />
          </Link>

          <ul className="flex items-center gap-4 text-sm text-muted w-full sm:w-auto justify-center sm:justify-start">
            <li>
              <Link to="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="text-foreground hover:text-accent transition-colors">
                Store
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative flex items-center border border-border rounded-full p-1.5 hover:border-accent">
              <svg width="22" height="22" viewBox="-51.2 -51.2 614.40 614.40" xmlns="http://www.w3.org/2000/svg" fill="#EDEDE8">
                <path d="M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z" />
              </svg>
              {cartQty !== 0 ? (
                <span className="absolute -top-2 -right-2 bg-danger text-background text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {cartQty}
                </span>
              ) : null}
            </Link>

            {isLogin ? (
              <button
                onClick={handleLogout}
                className="text-sm text-muted hover:text-foreground border border-border hover:border-accent rounded px-3 py-1.5 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm text-muted hover:text-foreground border border-border hover:border-accent rounded px-3 py-1.5 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;