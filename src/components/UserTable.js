import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>CPF</th>
        <th>Data de Nascimento</th>
        <th>Telefone</th>
        <th>Cargo</th>
        <th>Salário</th>
        <th>Ações</th>
      </tr>
    </thead>

    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.cpf}</td>
            <td>{user.birth}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>{user.wage}</td>
            <td>{user.action}</td>
        
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
        </tr>
        ))
      )
    :(
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}
   
    </tbody>
  </table>
)

export default UserTable