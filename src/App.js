import React, {useState} from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Document from './components/Document';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [userList, setUserList]=useState({
    name: "admin",
    email: "user@admin.com",
    password: "root"
  });
  const [indicator, setIndicator] = useState(false);
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const SignupHandler = (details) => {
    setUserList({
      name: details.name,
      email: details.email,
      password: details.password
    });
    console.log(userList);
  }
  const [documentPath, setDocumentPath] = useState("/");
  const LoginHandler = details=>{
    console.log(details);
    if(userList.email == details.email && userList.password == details.password){
      console.log("Logged in");
      setUser({name: userList.name, email: details.email});
      setError("");
      setDocumentPath("/Document");
    }
    else{
      setError("Invalid username or password");
      console.log(error);
    }
  }

  const LogoutHandeler = () => {
    console.log("LogOut");
    setUser({
      name: "",
      email: ""
    })
    setDocumentPath("/");
  }
  const statusHandler = (e) => {
    setIndicator(e);
  }
  return (<React.Fragment>
    <BrowserRouter>
    <NavBar status={statusHandler} path={documentPath} />
        <Routes>
          <Route path="/" element={<div className="App">
            {(user.email != "") ?(
              <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button classNmae="btn1" onClick={LogoutHandeler} style={{backgroundColor: "rgb(190, 145, 231)",padding: "5px",borderRadius: "5px",
}}>Logout</button>
              </div>) : (
                <div>{(!indicator)?(
                  <Signup SignupHandler={SignupHandler} />) : (
                  <Login LoginHandler={LoginHandler} error={error} />)}
                </div>
            )}
            </div>} />
          <Route path="/Document" element={<Document />} />
        </Routes>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
