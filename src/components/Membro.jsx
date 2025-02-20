import React, { Component } from "react";

class Membro extends Component {
    constructor (props){
        super(props)

        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this)
    }

    entrar(){
        let state = this.state;
        let novoNome = state.nome = "Seja Bem-vindo, Marcus Vynicius!"
        this.setState({novoNome})
    }

    render() {
        return(
            <div>
                <h2>Clique no botão para entrar!</h2>
                <h4>{this.state.nome}</h4>
                
                <button onClick={this.entrar}>Entrar</button>
                <button onClick={() => this.setState({nome: ""})}>Sair</button>
            </div>
        )
    }
}


export default Membro;