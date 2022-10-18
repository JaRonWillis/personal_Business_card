import "./App.css"
import React from "react";
import Info from "./componentes/Info";
import About from "./componentes/About";
import Interest from "./componentes/Interest";
import Footer from "./componentes/Footer";

 function App(){
  return(
      <div className="app">
          <Info />
          <About />
          <Interest />
          <Footer />
      </div>
  )
}
export default App