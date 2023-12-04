import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
          <Header/>
          <NavBar/>
          <Banner/>
          <ProductCard/>
          <Footer/>
      </div>
  );
};

export default App;
