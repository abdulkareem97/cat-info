import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Fact from "./component/Fact";
import { useState } from "react";
import Breeds from "./component/Breeds";


function App() {

  return (
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/fact' element={<Fact />}/>
        <Route path='/breeds' element={<Breeds />}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
