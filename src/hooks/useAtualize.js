import { useEffect } from "react"

function useAtualize(state) {
    useEffect(atualiza, [state])

    function atualiza() {
        alert("O valor atualizado é: " + state)
    }
}

export default useAtualize;