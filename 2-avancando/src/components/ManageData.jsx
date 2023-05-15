import {useState} from 'react';

const ManageData = () => {

    let someData = 10; 

    const [number, setNumber] = useState(0);

    return (
        <div> 
            <h1>Valor: {someData}</h1>
            <button onClick={() => someData = 15}>
                BOTÃO
            </button>

            <h1>Valor: {number}</h1>
            <button onClick={() => setNumber(number+1)}>
                BOTÃO
            </button>
        </div>
    )
}

export default ManageData;