import React from "react";
import MyLibrary from "./Pages/MyLibrary/index";
import BookDetail from "./Pages/BookDetails/index";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntrepreneurPage from "./Pages/Entrepreneur";
import Login from "./components/LoginButton";
import Logout from "./components/LogoutButton";

function App() {
  return (
    <Router>
      <Login/>   
      <Logout/>  
      <Routes>
        <Route path="/" element={<MyLibrary />}/>
        <Route path="/book-details" element={<BookDetail />}/>
        <Route path="/entrepreneur" element={<EntrepreneurPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
