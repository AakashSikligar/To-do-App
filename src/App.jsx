//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import TakeInput from "./components/input";
import "./memeData.js";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <TakeInput />
      </div>
    </>
  );
}

export default App;
