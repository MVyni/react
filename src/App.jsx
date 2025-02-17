import React from "react"

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo}idade={props.idade}/>

      <Social lk={props.lk}/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
      <h4>Eu sou {props.cargo}</h4>
      <hr/>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href="">Facebook</a>
      <a href={props.lk}>LinkdIn</a>
      <a href="">Instagram</a>
    </div>
  )
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