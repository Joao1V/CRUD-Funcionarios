import moment from 'moment';
import React, {useEffect} from 'react'

const UserTable = props => {
  useEffect(() => {
    console.log(props.users)
  
  },[]);
  return (
  
  <table>
    <thead>                                                 
      <tr>
        <th className="border px-6 py-4">Nome</th>
        <th className=" border px-6 py-4">Email</th>
        <th className="border px-6 py-4">CPF</th>
        <th className="border px-6 py-4">Data de Nascimento</th>
        <th className="border px-6 py-4">Telefone</th>
        <th className="border px-6 py-4">Cargo</th>
        <th className="border px-6 py-4">Salário</th>
        <th className="border px-6 py-4">Ações</th>
      </tr>
    </thead>

    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr className='' key={user.id}>
            <td className="border px-5 py-2">{user.name}</td>
            <td className="border px-5 py-2">{user.email}</td>
            <td className="border px-5 py-2">{user.cpf}</td>
            <td className="border px-5 py-2">{moment(user.birth).format("L")}</td>
            <td className="border px-5 py-2">{user.phone}</td>
            <td className="border px-5 py-2">{user.role}</td>
            <td className="border px-5 py-2">{user.wage}</td>
            <button>Edit</button>
            <button>Delete</button>
            <td className="">{user.action}</td>

            <td></td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  )}

export default UserTable
