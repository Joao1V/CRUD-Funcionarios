import { useState } from 'react';
import './App.css';
import UserRegister from './components/UserRegister';
import UserTable from './components/UserTable';

const App = () => {
  const usersData = [
    {id:1, name:'Joao', email:"Joao@gmail.com", cpf:"111.111.111-11", birth:"09/12/2000", phone:"(67) 9 9231-5123", role:"Desenvolvedor (a)", wage:"R$ 1.231,23" },

    {id:2, name:'Pafuncio', email:"Pafuncio@gmail.com", cpf:"222.222.222-22", birth:"05/10/1920", phone:"(67) 9 9210-5410", role:"Designer", wage:"R$ 1.500,23" },

    {id:3, name:'Astronildo', email:"Astronildo@gmail.com", cpf:"333.333.333-33", birth:"02/11/1800", phone:"(67) 9 9601-5485", role:"Secretário (a)", wage:"R$ 1.100,23" },

    {id:4, name:'Jerilene', email:"Jerilene@gmail.com", cpf:"444.444.444-44", birth:"01/09/1900", phone:"(67) 9 9601-5485", role:"Secretário (a)", wage:"R$ 12.000,00" },
  ]

  const [users, setUsers] = useState (usersData)
  return (
    <div>
      <div>
        <h1>Funcionários Cadastrados</h1>
        <UserTable users={users}/>
      </div>
    </div>
  );
}

export default App;
