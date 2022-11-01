import { useContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AuthContext from './contex/AuthContext';
import Login from './pages/Login/Login';
import Main from './components/Main';

function App() {
  const AuthCtx = useContext(AuthContext) 
  const[y,setY] = useState(false) 
  console.log("App")
  return (
    <div className="App">
      {/* <Header/>
      <main>
        {
          AuthCtx.isLoggedIn ? <Main/> : <Login/>
        }
      </main> */}
      <h1>App</h1>
      <button onClick={()=>setY(!y)}>App clik</button>
      {y && <p>paragraph in app component</p>}
      <Main/>
      
      
    </div>
  );
}

export default App;
