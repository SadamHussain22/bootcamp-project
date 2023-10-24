import React from "react";
import "./App.css";
import Homepagpick from "./components/navecompenets/Homepagpick";
import Cases from "./components/navecompenets/Cases";
import Straps from "./components/navecompenets/Straps";
import Powerbank from "./components/navecompenets/Powerbank";
import Cables from "./components/navecompenets/Cables";
import Magsafe from "./components/navecompenets/Magsafe";
import Chargers from "./components/navecompenets/Chargers";
import More from "./components/navecompenets/More";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
 
import Carousels from "./components/Carousel";
 
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import { AddCard } from "@mui/icons-material";
import CartIcon from "./components/Addcart";
import CardsDetails from "./components/CardsDetails";
import Profile from "./components/Profile";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
 
const App = () => {
   
   
  const theme = {

    colors: {
      heading: "rgb(24 24 29)",
      text: "   rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      btn: "rgb(98 84 243)",
      border: "rgba(98 84 243 0.5)",
      hr: "#ffffff",
      gradient:
        "Linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27 31 35 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
    
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <Header/>
          <Carousels/>
          <Routes>

            {/* <Route path="/" element={<Homepagpick />} /> */}
            
            <Route path='/' element={<Cards />} />
             <Route path='/cart/:id' element={<CardsDetails />} />
            <Route path="/straps" element={<Straps />} />
            
            <Route path="/powerbank" element={<Powerbank />} />
            <Route path="/cables" element={<Cables />} />
            <Route path="/magsafe" element={<Magsafe />} />
            <Route path="/chargers" element={<Chargers />} />
            <Route path="/more" element={<More />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />  
          </Routes>
          {/* <Cards/> */}
          
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
