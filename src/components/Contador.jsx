import React, { Component } from "react";

class Contador extends Component {

  constructor(props){
    super(props); //para usar todas as props

    this.state = {
      nome: "Vyni",
      contador: 0
    }

    
    //para acessar a função
    this.diminuir = this.diminuir.bind(this)
    this.aumentar = this.aumentar.bind(this) 
  }
  
  aumentar(){
    let state = this.state;
    state.contador += 1;
    state.nome = "Marcus"  
    this.setState(state)
  }

  diminuir(){
    let state = this.state;
    if(state.contador >=1){
    state.contador -= 1;
    }
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>
        <p>{this.state.nome}</p>

        <button onClick={this.aumentar}>+</button>
        {this.state.contador}
        <button onClick={this.diminuir}>-</button>
      </div>

    )
  }
}

export default Contador;