import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsList from "./assets/Components/ProductList";
import Wishlist from "./pages/Wishlist";
import AuthForm from "./features/auth/AuthForm";
import LogoutButton from "./features/auth/LogoutButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Basket from "./pages/Basket";

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <ProductsList /> 
                </div>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/auth"
            element={isAuthenticated ? <Navigate to="/" /> : <AuthForm />}
          />
          <Route
            path="/wishlist"
            element={isAuthenticated ? <Wishlist /> : <Navigate to="/auth" />}
          />
          <Route
            path="/basket"
            element={isAuthenticated ? <Basket /> : <Navigate to="/auth" />}
          />
        </Routes>
      </div>
    </Router>
  );
}
