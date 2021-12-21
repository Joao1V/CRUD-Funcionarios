import React, { useState } from 'react'
import { maskCPF, maskPhone, maskDate, maskBRL } from '../mask'

const UserRegister = props => {
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

  const [user, setUser] = useState(initialFormState)

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (
            !user.name ||
            !user.email ||
            !user.cpf ||
            !user.birth ||
            !user.phone ||
             user.role ||
            !user.wage
          )
            return
          props.addUser(user)

          setUser(initialFormState)
        }}
      >
        <div className="grid grid-cols-3 gap-2 auto-cols-auto font-semibold w-1/2 m-auto ">
          <input
            className="py-2 rounded-md text-xl text-center"
            name="Nome"
            title="Nome"
            placeholder="Nome"
            type="text"
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
          />

          <input
            className="py-2 rounded-md text-xl text-center"
            name="Email"
            title="Email"
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="py-2 rounded-md text-xl text-center"
            name="CPF"
            title="CPF"
            placeholder="CPF"
            type="text"
            value={user.cpf}
            onChange={e => setUser({ ...user, cpf: maskCPF(e.target.value) })}
          />
          <input
            className="py-2 rounded-md text-xl text-center"
            name="Birth"
            title="Data de Nascimento"
            placeholder="Data de Nascimento"
            type="text"
            value={user.birth}
            onChange={e => setUser({ ...user, birth: maskDate(e.target.value) })}/>
          <input
            className="py-2 rounded-md text-xl text-center"
            name="Telefone"
            title="Telefone"
            placeholder="Telefone"
            type="tel"
            value={user.phone}
            onChange={e =>
              setUser({ ...user, phone: maskPhone(e.target.value) })
            }
          />

          <input
            className="py-2 rounded-md text-xl text-center"
            name="Salário"
            title="Salário"
            placeholder="Salário"
            type="text"
            value={user.wage}
            onChange={e => setUser({ ...user, wage:maskBRL (e.target.value) })}
          />
          <select
            className="py-2 rounded-md text-xl text-center"
            onChange={e => setUser({ ...user, role:e.target.value})}>

            <option value="Selecione o cargo" disabled>
              Selecione o Cargo
            </option>
            <option value="Desenvolvedor(a)">Desenvolvedor(a)</option>
            <option value="Designer">Designer</option>
            <option value="Secretário">Secretário(a)</option>
            <option value="Gerente">Gerente</option>
          </select>
        </div>
        <div className='grid'>
        <button
          className=" w-48 h-14 bg-black text-white text-center rounded-xl mx-auto hover:bg-white hover:text-black"
          type="submit"
        >
          Adicionar Usuário</button>
        </div>
      </form>
    </div>
  )
}

export default UserRegister
