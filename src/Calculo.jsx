import React, { useEffect } from "react";
import { useState } from "react";
import useAtualize from "./hooks/useAtualize";


const Calculo = () => {

const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [total, setTotal] = useState();
const [historico, setHistorico] = useState([]);


useEffect(updateHistoric, [total])
function updateHistoric() {
    setHistorico(total)
}


const handleSoma = () => {
    let soma = parseInt(num1) + parseInt(num2);
    setTotal(soma);
}

const handleDiminui = () => {
    let diminuir = parseInt(num1) - parseInt(num2)
    setTotal(diminuir);
}

const handleMultiplica = () => {
    let multiplicar = parseInt(num1) * parseInt(num2)
    setTotal(multiplicar)
}

const handleDividi = () => {
    let dividir = parseInt(num1) / parseInt(num2)
    setTotal(dividir)
}



    return(
        <>
            <h2>Faça seu cálculo</h2>
            <input type="text" 
            placeholder="Digite um número"
            onChange={(e) => setNum1(e.target.value)}/>
            <input type="text" 
            placeholder="Digite um número"
            onChange={(e) => setNum2(e.target.value)}/>

        <div>
    
                <button onClick={handleSoma}>+</button>
                <button onClick={handleDiminui}>-</button>
                <button onClick={handleMultiplica}>*</button>
                <button onClick={handleDividi}>/</button>
        </div>

            <h3>Total: {total}</h3>
            <h4>Histórico de resultados: {historico}</h4>
        </>
    )
}

export default Calculo;