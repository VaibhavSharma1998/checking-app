import Main from "./Components/Main";
import { RegexMain } from "./Components/RegexMain";
import { ShowFormData } from "./Components/ShowFormData";
// import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="data" element={<ShowFormData />} />
          <Route path="regex" element={<RegexMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
