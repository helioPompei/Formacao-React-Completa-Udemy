import { useState } from "react";

const Challenge = () => {

    let valor1 = 5;
    let valor2 = 10;

    const [result, setResult] = useState("");

    const handleSomarValores = () => {
        setResult(valor1 + valor2);
        console.log(result);
    }

    return (
        <div>
            <h1> Soma dos valores </h1>
            <h2> {valor1} + {valor2} = {result} </h2>
            <button onClick={handleSomarValores}>Somar Valores!</button>
        </div>
    )
}

export default Challenge;