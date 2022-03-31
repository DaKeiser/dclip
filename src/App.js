import {   
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Container from './components/Container'
import Page1 from './pages/Page1'
import Post from './pages/Post'
import UploadFile from "./pages/Upload";
import Homepage from "./pages/Homepage"
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/post" element={<Post />} />
      <Route path="/upload" element={<UploadFile />} />
      <Route path="/homepage" element={<Homepage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
