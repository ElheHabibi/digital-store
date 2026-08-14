import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useAuthContext } from "./context/AuthContext";
import Login from "./pages/login/Login";

function App() {
  const { isLogin } = useAuthContext();
  return (
    <>
        <ShoppingCartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="product/:id" element={<Product />} />
              <Route
                path="/login"
                element={isLogin ? <Navigate to="/" /> : <Login />}
              />
              <Route element={<PrivateRoute />}>
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </Layout>
        </ShoppingCartProvider>
    </>
  );
}

export default App;
