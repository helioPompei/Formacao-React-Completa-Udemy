import { useState } from "react"

const ListRander = () => {

    const [list, setList] = useState([
        { nome: "Matheus", id: 1, age: 23 },
        { nome: "Pedro", id: 2, age: 30 },
        { nome: "Lucas", id: 3, age: 19 }
    ]);

    
    const DeletaPessoa = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setList( (prevUsers) => {
            return prevUsers.filter((user) => randomNumber != user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((obj) => (
                    <li key={obj.id}> {obj.nome} -  {obj.age} </li>
                )
                )}
            </ul>
            <button > ADD LISTA</button>
            <button onClick={DeletaPessoa}> REMOVE RANDOM</button>
        </div>
    )
}

export default ListRander

