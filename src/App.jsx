import { useState } from 'react'
import UserRegister from './components/UserRegister'
import UserTable from './components/UserTable'
import EditUser from './components/EditUser'

const App = () => {
  const usersData = [
    {
      id: 1,
      name: 'Joao',
      email: 'Joao@gmail.com',
      cpf: '111.111.111-11',
      birth: '09/12/2000',
      phone: '(67) 99231-5123',
      role: 'Desenvolvedor (a)',
      wage: '1.231,23'
    },

    {
      id: 2,
      name: 'Pafuncio',
      email: 'Pafuncio@gmail.com',
      cpf: '222.222.222-22',
      birth: '05/10/1920',
      phone: '(67) 99210-5410',
      role: 'Designer',
      wage: '1.500,23'
    },

    {
      id: 3,
      name: 'Astronildo',
      email: 'Astronildo@gmail.com',
      cpf: '333.333.333-33',
      birth: '02/11/1800',
      phone: '(67) 99601-5485',
      role: 'Secretário (a)',
      wage: '1.100,23'
    },

    {
      id: 4,
      name: 'Jerilene',
      email: 'Jerilene@gmail.com',
      cpf: '444.444.444-44',
      birth: '01/09/1900',
      phone: '(67) 99601-5485',
      role: 'Gerente',
      wage: '12.000,00'
    }
  ]

  const initialFormState = {
    id: null,
    name: '',
    email: '',
    cpf: '',
    birth: '',
    phone: '',
    role: '',
    wage: ''
  }

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState (false) //verifica se o modo de edição está on
  const [currentUser, setCurrentUser] = useState(initialFormState) // Verifica o usuário atual 

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))}
    
  const editRow = user => { // A função ativa o modo de edição e define o usuário atual
  setEditing (true)

  setCurrentUser ({
    id:user.id,
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    birth: user.birth,
    phone: user.phone,
    role: user.role,
    wage: user.wage
  })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers (users.map((user) => (user.id === id ? updateUser : user)))
  }
  return (
    <div className="">
        {editing ? (
          <div>
            <h2 className="text-white text-5xl font-semibold text-center mt-4 mb-8">Edição de Usuário</h2>
            <EditUser 
            setEditing = {setEditing}
            currentUser = {currentUser}
            updateUser = {updateUser}
            />
          </div>
        ) : (
          <div>
            <h1 className="text-white text-5xl font-semibold text-center mt-4 mb-8">Cadastre seu Funcionário</h1>
            <UserRegister addUser={addUser} />
          </div>
        )}
      <div>
        <h1 className="text-white text-4xl font-semibold text-center mt-6 mb-8">
          Funcionários Cadastrados
        </h1>
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
      </div>
    </div>
  )
}

export default App
