import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conatct from "./pages/Conatct";
import About from "./pages/About";
import Layout from "./components/Layout";
import OurStore from "./pages/OurStore";
import { DataProvider } from "./context/DataProvider";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Layout isLogin={true} />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Conatct />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<OurStore />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blogs/blog/:id" element={<SingleBlog />} />
              <Route path="/compare-products" element={<CompareProducts />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
