import {   
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Container from './components/Container'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import UploadFile from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/upload" element={<UploadFile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
