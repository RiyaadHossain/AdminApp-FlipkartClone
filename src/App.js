import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { isLoggedIn } from "./Actions";
import SignUp from "./Pages/Signup/SignUp";
import SignIn from "./Pages/Signin/SignIn";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authticated) {
      dispatch(isLoggedIn());
    }
  }, [auth.authticated, dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
