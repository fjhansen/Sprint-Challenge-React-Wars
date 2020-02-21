  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


import React from 'react';
import './App.css';
import Header from "./components/Header";
import StarCard from "./components/StarCard";
import Footer from "./components/Footer"

const App = () => {


  return (
    <div className="App">
      <Header/>
      <StarCard/>
      <Footer/>
      </div>
  );
}

export default App;
