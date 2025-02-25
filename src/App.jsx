import React, { Component } from "react";
import Calculo from "./Calculo";
import Botao from "./Botao";

class App extends Component {

  render(){
    return(
      <div>
        <Calculo/>
        <Botao msg="Botão com props clicado">Botão Props</Botao>
      </div>

    )
  }
}

export default App;