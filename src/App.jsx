import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Signup from "./components/Signup";

function App() {
  const [template, setTemplate]= useState("")
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem('token'));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout isLogIn={isLogIn} setIsLogIn={setIsLogIn}/>} >
          <Route index element={<Login/>} />
          <Route path="/register" element={<Signup/>}/>
 
        </Route>
      </Routes>
    </div>
  )
}

export default App
