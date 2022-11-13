import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Fact from "./component/Fact";
import { useState } from "react";
import Breeds from "./component/Breeds";
import BreedDetails from "./component/BreedDetails";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import About from "./component/About";


function App() {

  return (
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/fact' element={<Fact />}/>
        <Route path='/breeds' element={<Breeds />}/>
        <Route path='/breeds/:name' element={<BreedDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
