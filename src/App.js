import {   
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Page1 from './pages/Page1'
import Post from './pages/Post'
import UploadFile from "./pages/Upload";
import Homepage from "./pages/Homepage"
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/post" element={<Post />} />
      <Route path="/upload" element={<UploadFile />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
