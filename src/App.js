import LoginForm from "./components/form/LoginForm";
import SignupForm from "./components/form/SignupForm";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
