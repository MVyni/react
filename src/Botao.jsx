import React from "react";

const Botao = (props) => {
    
    return(
    <>    
    <button onClick={() => (props.msg)}> {props.children}</button>
    </>
    )
}

export default Botao;