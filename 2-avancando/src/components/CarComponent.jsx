
const CarComponent = ({ cor, km, model, isNew }) => {


    return (
        <div>
            <div> DETALHES NOVO CARRO </div>
            <ul>
                <li>{cor}</li>
                <li>{km}</li>
                <li>{model}</li>
                {isNew ? <li> Carro novo! </li> : <li> Não é novo não kk </li>}
            </ul>
        </div>
    )
}

export default CarComponent;