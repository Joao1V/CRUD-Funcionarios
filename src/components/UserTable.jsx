import moment from 'moment'
import React, { useEffect } from 'react'

const UserTable = props => {
  useEffect(() => {
    console.log(props.users)
  }, [])
  return (
    <div className="flex justify-center">
      <table className="mx-auto ">
        <thead>
          <tr className="text-white">
            <th className="border px-6 py-4">Nome</th>
            <th className="border px-6 py-4">Email</th>
            <th className="border px-6 py-4">CPF</th>
            <th className="border px-6 py-4">Data de Nascimento</th>
            <th className="border px-6 py-4">Telefone</th>
            <th className="border px-6 py-4">Cargo</th>
            <th className="border px-6 py-4">Salário</th>
            <th className="border px-6 py-4">Ações</th>
          </tr>
        </thead>

        <tbody className="bg-neutral-300">
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr className="border-separate" key={user.id}>
                <td className="border px-5 py-2 ">{user.name}</td>
                <td className="border px-5 py-2 ">{user.email}</td>
                <td className="border px-5 py-2">{user.cpf}</td>
                <td className="border px-5 py-2 ">{user.birth}</td>
                <td className="border px-5 py-2">{user.phone}</td>
                <td className="border px-5 py-2">{user.role}</td>
                <td className="border px-5 py-2">{user.wage}</td>
                <div className='flex justify-center'>

                <button className="hover:text-cyan-500 m-auto text-2xl">
                  <ion-icon  name="create-outline"></ion-icon>
                </button>
                <button className="hover:text-red-900 m-auto text-2xl">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
                </div>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
