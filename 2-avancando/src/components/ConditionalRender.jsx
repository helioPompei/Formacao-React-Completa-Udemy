import { useState } from "react"


const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] = useState("joão");

    const renderizar = (x) => {
        if (x == true) {
            return <div> O X É TRUE HEHE</div>
        } else {
            return <div> O X É FALSE HAHA</div>
        }
    }

    return (
        <div>
            <h1> Isso sera exibido? </h1>
            { x ? <p> o x é true! </p> : <p> o x é falso! </p> }
            { x && <p> o x é true! </p> }
            {renderizar(x)}
            { name == "joão" ? <h1>SIM</h1> : <h1>NÃO</h1> }
            
        </div>
        )
}

export default ConditionalRender;