import React, {useState} from 'react';
import Login from './components/Login';
import Home from './pages/Home';
import './App.css';

function App() { const adminUser = {
  usernam: "admin",
  password: "admin123"
}
const [errorMessage, setErrorMessages] = useState ("");
const [user, setUser] = useState({name:'', password: ""});
 
const Login = details => {

 }
  return (
    <div className="App">
    
        <Home/>,
    </div>
  )
}

export default App;
