import ItemHistoric from "./ItemHistoric";


const Historico = (props) => {
    return(
    <>
    <h4>Histórico de resultados:</h4>
    <ul>
        {props.historico.map((item, index) => (
            <ItemHistoric key={index} historico={item}/>
        ))}
    </ul>
    </>
    )
}  

export default Historico;