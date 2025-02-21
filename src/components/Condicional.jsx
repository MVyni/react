import React, { Component } from "react";


class Condicional extends Component {

    constructor(props){
        super(props)

        this.state = {
            status: true
        }
        
        this.sair = this.sair.bind(this)
        this.entrar = this.entrar.bind(this)

    }

    sair() {
        this.setState({status: false})
    }
    entrar() {
        this.setState({status: true})
    }

    render(){
        return(
            <div>
                {this.state.status ? 
                 <div>
                    <h2>Seja Bem-vindo ao sistema!</h2>
                    <button onClick={this.sair}>sair</button>
                 </div> :
                 <div>
                    <h2>Olá visitante!</h2>
                 <button onClick={this.entrar}>entrar</button>
                 </div>
                }
            </div>

        )
    }
}

export default Condicional;