import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const UserTable = props => {
  useEffect(() => {
    console.log(props.users)
  }, [])

  const notifySucess = () => {
    toast.success ('Usuário registrado!', {position: toast.POSITION.TOP_RIGHT})}

  const notifyInfo = () => {
    toast.info ('Edição de usuário ativada!', {position: toast.POSITION.TOP_RIGHT})}

  const notifyDelete = () => {
    toast.error ('Usuário deletado.',{position: toast.POSITION.TOP_RIGHT})}

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
                <td className=" px-5 py-2 ">{user.name}</td>
                <td className=" px-5 py-2 text-center">{user.email}</td>
                <td className=" px-5 py-2">{user.cpf}</td>
                <td className=" px-5 py-2 text-center">{user.birth}</td>
                <td className=" px-5 py-2">{user.phone}</td>
                <td className=" px-5 py-2 text-center">{user.role}</td>
                <td className=" px-5 py-2">{"R$ "+user.wage}</td>
                <div className="flex">
                  <button
                    onClick={()=> {
                      notifyInfo();
                      props.editRow (user)
                    }}
                    className="hover:text-emerald-900 m-auto text-2xl"
                  >
                    <ion-icon name="create-outline"></ion-icon>
                  </button>
                  <button
                    onClick={() => {
                      notifyDelete();
                      props.deleteUser(user.id);}}
                    className="hover:text-red-900 m-auto text-2xl"
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </div>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center text-2xl py-4" colSpan={8}>
                Não há usuários cadastrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
