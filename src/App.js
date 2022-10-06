import React from "react";
import {Header } from "./componentes/Header";
import {Paginas} from "./componentes/Paginas";
import "boxicons";
import { BrowserRouter as Router} from "react-router-dom";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Carrito/>
          <Paginas/>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
