import react, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { maskCPF, maskPhone, maskDate, maskBRL } from '../mask'

toast.configure()
const EditUser = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const notifySucess = () => {
    toast.success ('Usuário atualizado com sucesso!', {position: toast.POSITION.TOP_RIGHT})}

  const notifyError = () => {
      toast.error ('Edição cancelada!', {position: toast.POSITION.TOP_RIGHT})}

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
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
          onChange={e => setUser({ ...user, birth: maskDate(e.target.value) })}
        />
        <input
          className="py-2 rounded-md text-xl text-center"
          name="Telefone"
          title="Telefone"
          placeholder="Telefone"
          type="tel"
          value={user.phone}
          onChange={e => setUser({ ...user, phone: maskPhone(e.target.value) })}
        />

        <input
          className="py-2 rounded-md text-xl text-center"
          name="Salário"
          title="Salário"
          placeholder="Salário"
          type="text"
          value={user.wage}
          onChange={e => setUser({ ...user, wage: maskBRL(e.target.value) })}
        />

        <select
          className="py-2 rounded-md text-xl text-center"
          onChange={e => setUser({ ...user, role: e.target.value })}
        >
          <option value="Selecione o cargo" disabled>
            Selecione o Cargo
          </option>
          <option value="Desenvolvedor(a)">Desenvolvedor(a)</option>
          <option value="Designer">Designer</option>
          <option value="Secretário">Secretário(a)</option>
          <option value="Gerente">Gerente</option>
        </select>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <button
         onClick={()=> {notifySucess();}}
          className="w-48 h-14 bg-emerald-700 text-white text-center rounded-xl  hover:bg-emerald-900"
          type="submit"
        >
          Atualizar Usuário
        </button>

        <button
          onClick={() => {
            props.setEditing(false);
            notifyError()
          }}
          className=" w-48 h-14 bg-red-700 text-white text-center rounded-xl hover:bg-red-900"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default EditUser
