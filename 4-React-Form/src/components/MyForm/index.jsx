import { useState } from 'react'
import './MyForm.css'

const index = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("editor");

    const salvarValores = (e) => {
        e.preventDefault();
        setName("")
        setEmail("")
        setBio("")
    }

    return (
        <form onSubmit={salvarValores}>
            <div>
                <label htmlFor="name"> Nome: </label>
                <input
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    type="text" name="name"
                    placeholder="Type your name..." />
            </div>

            <div>
                <span> Email: </span>
                <label >
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="text"
                        placeholder="Type your name..." />
                </label>
            </div>
            <div>
                <label>
                    <span>Bio: </span>
                    <textarea
                        placeholder="Escreva sua biografia..."
                        onChange={(e) => { setBio(e.target.value) }}
                        value={bio}
                    ></textarea>
                </label>
            </div>
            <div>
                <label>
                    <span>Função: </span>
                    <select value={role} onChange={(e) => { setRole(e.target.value) }}>
                        <option value="user"> Usuario</option>
                        <option value="editor"> editor</option>
                        <option value="admin"> admin </option>
                    </select>
                </label>
            </div>



            <h2> Nome: {name} </h2>
            <h2> Email: {email} </h2>
            <h2> Bio: {bio} </h2>
            <h2> Role: {role} </h2>


            <button type="submit"> ENVIAR </button>
        </form>
    )
}

export default index