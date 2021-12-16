import React, { useState } from 'react'

const UserRegister = props => {
  const initialFormState ={id: null, name:"", email:"", cpf:"", birth:"", phone:"", role:"", wage:"" }
  const [user, setUser] = useState (initialFormState);
  const [roleOption, setroleOption] = useState("Selecione o Cargo");

  const handleInputChange = (event) => {
    const {name, value} = event.target 

    setUser ({ ...user, [name]:value})
  }
  return (
    <div>
      <form
      onSubmit={event => {
        event.preventDefault ()
        if (!user.name || !user.email || !user.cpf || !user.birth || !user.phone || !user.role || !user.wage) return

        props.addUser (user)
        setUser (initialFormState)
      }}
      >
        <input name='Nome' title='Nome' placeholder='Nome' type="text" value={user.name} onChange={handleInputChange} />
        <input name='Email' title='Email' placeholder='Email' type="email" value={user.email} onChange={handleInputChange} />
        <input name='CPF' title='CPF' placeholder='CPF' type="text" value={user.cpf} onChange={handleInputChange}/>
        <input name='CPF' title='Data de Nascimento' placeholder='Data de Nascimento' type="date" value={user.birth} onChange={handleInputChange}/>
        <input name='Telefone' title='Telefone' placeholder='Telefone' type="tel" value={user.phone} onChange={handleInputChange}/>
        
        <select value={user.role} onChange={handleInputChange} onChange={(e) => {
           const selectedRole = e.target.value;
           setroleOption (selectedRole);
        }}>
        
          <option value="Desenvolvedor(a)">Desenvolvedor(a)</option>
          <option value="Designer">Designer</option>
          <option value="Secretário">Secretário(a)</option>
          <option value="Gerente">Gerente</option>
        </select>
        {roleOption}
        <input name='Salário' title='Salário' placeholder='Salário' type="text" value={user.wage} onChange={handleInputChange}/>
        <button type="submit">Adicionar Usuário</button>

        

      </form>
    </div>
  )
}

export default UserRegister
