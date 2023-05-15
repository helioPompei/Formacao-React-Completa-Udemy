const Events = () => {

    const handleMyEvent = (e) => {
        console.log("Clicou aqui!")
        console.log(e)
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso porque foi passado TRUE!</h1>
        } else {
            return <h1>Também posso renderizar isso porque foi passado FALSE!</h1>
        }
    };

        return (
            <div>
                <div>
                    <button onClick={handleMyEvent}>Clique Aqui!</button>
                </div>
                <div>
                    <button onClick={() => console.log("Clicou aqui também!")}>Clique Aqui também!</button>
                </div>
                {renderSomething(false)}
            </div>
        )
    }

    export default Events;