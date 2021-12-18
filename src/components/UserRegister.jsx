import { render } from '@testing-library/react';
import React, { useState } from 'react'

const UserRegister = (props) => {
  const initialFormState = {id: null, name:"", email:"", cpf:"", birth:"", phone:"", role:"", wage:"" }

  const [user, setUser] = useState (initialFormState);

  return (
    <div>
      <form
      onSubmit={event => {
        event.preventDefault ()
        if (!user.name || !user.email || !user.cpf || !user.birth || !user.phone || user.role || !user.wage) return
        console.log(user);
        props.addUser (user)
        setUser (initialFormState)
      }}
      >        
        <input name='Nome' title='Nome' placeholder='Nome' type="text" value={user.name} onChange={(e) => setUser ({...user, name:e.target.value})}/>

        <input name='Email' title='Email' placeholder='Email' type="email" value={user.email} onChange={(e) => setUser ({...user, email:e.target.value})} />
        <input name='CPF' title='CPF' placeholder='CPF' type="text" value={user.cpf} onChange={(e) => setUser ({...user, cpf:e.target.value})}/>
        <input name='Birth' title='Data de Nascimento' placeholder='Data de Nascimento' type="date" value={user.birth} onChange={(e) =>      
          setUser ({...user, birth:e.target.value})}/>
        <input name='Telefone' title='Telefone' placeholder='Telefone' type="tel" value={user.phone} onChange={(e) => setUser ({...user, phone:e.target.value})}/>
        
        <select onChange={(e) => setUser ({...user, role:e.target.value})}>
          <option value="Selecione o cargo" disabled>Selecione o Cargo</option>
          <option value="Desenvolvedor(a)">Desenvolvedor(a)</option>
          <option value="Designer">Designer</option>
          <option value="Secretário">Secretário(a)</option>
          <option value="Gerente">Gerente</option>
        </select>

        <input name='Salário' title='Salário' placeholder='Salário' type="text" value={user.wage} onChange={(e) => setUser ({...user, wage:e.target.value})}/>
        <button type="submit">Adicionar Usuário</button>
      </form>
    </div>
  )
}

export default UserRegister