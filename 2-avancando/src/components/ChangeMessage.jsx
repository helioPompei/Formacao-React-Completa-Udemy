

const ChangeMessage = ({mudarMsg}) => {

    const messages = ["oi", "ola", "oi, td bem?"]

  return (
    <>
    <button onClick={() => mudarMsg(messages[0])}> OI </button>
    <button onClick={() => mudarMsg(messages[1])}> ola </button>
    <button onClick={() => mudarMsg(messages[2])}> oi, td bem? </button>
    </>
  )
}

export default ChangeMessage;