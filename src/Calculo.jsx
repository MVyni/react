import React, { useEffect, useState } from "react";
import Botao from "./Botao";


const Calculo = () => {

const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [total, setTotal] = useState();
const [historico, setHistorico] = useState([]);


useEffect(updateHistoric, [total])
function updateHistoric() {
    
    setHistorico([...historico, total]);
}


    return(
        <>
            <h2>Faça seu cálculo</h2>
            <input type="text" 
            placeholder="Digite um número"
            onChange={(e) => setNum1(Number(e.target.value))}
            />

            <input type="text" 
            placeholder="Digite um número"
            onChange={(e) => setNum2(Number(e.target.value))}
            />

        <div>
                <button onClick={() => setTotal(num1 + num2)}>+</button>
                <button onClick={() => setTotal(num1 - num2)}>-</button>
                <button onClick={() => setTotal(num1 / num2)}>/</button>
                <button onClick={() => setTotal(num1 * num2)}>*</button>
        </div>

            <h3>Total: {total}</h3>
            <h4>Histórico de resultados: {historico}</h4>
        </>
    )
}

export default Calculo;