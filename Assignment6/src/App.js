import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

//Header
//  Logo
//  NavItems - Home, About, Contact, Cart
//Body 
//  RestaurantList
//      RestaurantCard
//Footer

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
