import React, { Component } from "react";
import Calculo from "./Calculo";
import Botao from "./Botao";

class App extends Component {

  render(){
    return(
      <div>
        <Calculo/>
        <Botao msg="botão clicado">Botão props</Botao>
      </div>

    )
  }
}

export default App;