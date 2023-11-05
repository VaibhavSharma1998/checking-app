
import { RegexMain } from "./Components/RegexMain";
import { ShowFormData } from "./Components/ShowFormData";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./Components/SignIn";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="data" element={<ShowFormData />} />
          <Route path="regex" element={<RegexMain />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
