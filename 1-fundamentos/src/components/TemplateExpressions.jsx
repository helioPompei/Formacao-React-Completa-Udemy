const TemplateExpressions = () => {

    const name = "Hélio Berizonzi Pompei";
    const data = {
        age: 31,
        job: "Programer",
    };

    return (
        <div>
            <h1> Olá {name}, tudo bem? </h1>
            <h2>Você atua como: {data.job}</h2>
            <h2>{ 4 + 2 }</h2>
        </div>
    )
}

export default TemplateExpressions;