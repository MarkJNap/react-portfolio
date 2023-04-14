import React from "react";
import Header from "./components/Header"
import DisplayContainer from "./containers/DisplayContainer"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <DisplayContainer />
      <Footer />
    </div>
  );
}

export default App;
