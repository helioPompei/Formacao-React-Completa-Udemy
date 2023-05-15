

const UserDetails = ({userList}) => {

  return (
    <div>
        {userList.map( (user, i) => (
            user.age >= 18 ? <h1 key={i}> o user {user.nome} é MAIOR que 18 </h1> 
                            : <h1 key={i}> o user {user.nome} é MENOR que 18 </h1> 
        ))}
    </div>
  )
}

export default UserDetails