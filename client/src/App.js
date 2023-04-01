import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [password, setPassword] = useState('')
  const [service, setService] = useState('')
  const [passwordsList, setpasswordsList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/showpasswords')
    .then((res) => {
      setpasswordsList(res.data)
    })
  },[])

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword',
    {
      password : password,
      service : service
    })
  }

  const decryptPassword = (encryptedPassword) => {
      Axios.post('http://localhost:3001/decryptpassword',{
        password : encryptedPassword.password,
        iv : encryptedPassword.iv
      })
      .then((res) => {
        setpasswordsList(passwordsList.map((value) => {
          return value.id === encryptedPassword.id ? 
          {id : value.id, password : value.password, service : res.data, iv : value.iv} 
          : value;
        }))
      })
  }


  return (
    <div className="App">
     <div className='addPassword'>
      <input type="text" placeholder='Ex. password123' 
      onChange={(e) => setPassword(e.target.value)}/>

      <input type="text" placeholder='Ex. Facebook'
       onChange={(e) => setService(e.target.value)}/>

      <button onClick={addPassword}>Add Password</button>
     </div>

     <div className='Passwords'>
      {passwordsList.map((password, key) => {
          return (
            <div className="password" key={key} onClick={() => {decryptPassword({password : password.password, iv: password.iv, id: password.id,})}}>
                <h2>{password.service}</h2>
            </div>
          )
      })}
     </div>
    </div>
  );
}

export default App;
