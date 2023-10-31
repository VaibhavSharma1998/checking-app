import Main from "./Components/Main"
import {ShowFormData }  from "./Components/ShowFormData";
// import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="data" element={<ShowFormData/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}


export default App;
