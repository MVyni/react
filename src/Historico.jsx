import { useEffect, useState } from "react";

const Historico = () => {
    
    const [historico, setHistorico] = useState([]);
    function useUpHistoric (state){
    useEffect(updateHistoric, [state])

    function updateHistoric(){
        let update = historico.push(state)
        setHistorico(update);
    }
}

    return(
        <>
        <h4>Seu resultado de histórico: {historico}</h4>
        </>
    )
}