import React, { Component } from "react";

class Equipe extends Component {
  render(){
    return(
      <Social nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
    )
  }
}

class Social extends Component{
  render(){
    return(
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
        <hr />
      </div>
    )
  }
}

export default function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome ="Vyni" cargo="Programador" idade="25" lk="https://google.com"/>
      <Equipe nome ="Carol" cargo="Designer" idade="23"/>
    </div>
  )
}