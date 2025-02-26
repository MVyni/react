import { useEffect } from "react";

function useHistoric (state) {
    useEffect(historico, [state])

    function historico() {
        let updateHistorico = historico.push(state)
    }
}

export default useHistoric;