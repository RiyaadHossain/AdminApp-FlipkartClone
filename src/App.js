import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { isLoggedIn } from "./Actions";
import SignUp from "./Pages/Signup/SignUp";
import SignIn from "./Pages/Signin/SignIn";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Pages/Category/Category";
import Order from "./Pages/Order/Order";
import Product from "./Pages/Product/Product";
import { getAllData } from "./Actions/dataAction";


function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authticated) {
      dispatch(isLoggedIn());
    }
    dispatch(getAllData())
  }, [auth.authticated, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/products" element={<Product />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
