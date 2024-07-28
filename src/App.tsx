import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
