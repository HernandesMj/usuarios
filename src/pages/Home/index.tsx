import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from './../../services/api'



async function getUsers() {
  const a = await api.get('/usuarios')
  console.log(a)
}


 
async function Home() {
  const users = await getUsers()

 console.log(users)
  return (
   
      <div className= 'container'>
        <form>
        <h1>Cadastro de Usuário</h1>
        <input placeholder="name" name='nome' type='text'/>
        <input placeholder="Idade" name='idade' type='number'/>
        <input placeholder="Email" name='email' type='email'/>
        <button type='button'>Cadastrar</button>
        </form>
        
        {users.map((user) => (                                                    
 
 <div key={user.id} className="card">
 <div>
   <p>Nome: <span>{user.nome}</span> </p>
   <p>Idade: <span>{user.age}</span> </p>
   <p>Email: <span>{user.email}</span> </p>
 </div>
  <button style={{ width: '50px', height: '50px', padding: '0', border: 'none', background: 'transparent' }}>
    <img src={Trash} alt="Ícone de lixeira" style={{ width: '20px', height: '20px' }} />
  </button>
</div>

        ))}

      </div>
   
  )
}

export default Home
