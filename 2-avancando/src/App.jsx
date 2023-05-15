// Style - CSS 
import './App.css';

// Assets 
import City from './assets/react.svg'

// Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarComponent from './components/CarComponent';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';


function App() {

  const [valor, setValor] = useState('Digite acima');

  const [carList] = useState(
    [
      {
        cor: "Vermelho",
        km: "10",
        model: "fiat",
        isNew: false
      },
      {
        cor: "Amarelo",
        km: "0",
        model: "ford",
        isNew: true
      },
      {
        cor: "azul",
        km: "10",
        model: "bmw",
        isNew: false
      },

    ]
  );

  const [userList] = useState(
    [
      {
        nome: "joao",
        age: 32,
        job: "dev",
      },
      {
        nome: "pedro",
        age: 21,
        job: "dev",
      },
      {
        nome: "ricardo",
        age: 12,
        job: "dev",
      },

    ]
  );



  function showMessage() {
    console.log("Evento componente pai");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <h1> Avançando em React!</h1>

      {/*IMAGEM EM PUBLIC */}
      <img src="/logo192.png" alt="SMALL logo react" />

      {/*IMAGEM EM ASSETS */}
      <img src={City} alt="BIG logo react" />
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <form>
        <input onChange={(event) => setValor(event.target.value)} type="text" />
        <h2> {valor} </h2>
      </form>
      <ShowUserName nome="Seu nome aqui"></ShowUserName>

      {/* CARROS */}
      {carList.map((car, i) => (
        <CarComponent key={i} cor={car.cor} km={car.km} model={car.model} isNew={car.isNew}> </CarComponent>
      ))}

      {/* CHILDREN */}
      <Container><h1>filho</h1></Container>

      {/* Executar Função */}
      <Container><h1>filho</h1></Container>
      <ExecuteFunction funcao={showMessage}></ExecuteFunction>

      {/* STATE LIFT */}
      <Message msg={message}> </Message>
      <ChangeMessage mudarMsg={handleMessage}> </ChangeMessage>

      {/* USER DETAILS */}
      <UserDetails userList={userList}></UserDetails>
    </>
  )
}

export default App
