import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import VideoCall from './routes/Videocall';
import Login from './Components/Login';
import Feedback from './routes/Feedback';
import fire from './fire';

function App() {
  const [user,setUser]=React.useState('')
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({
    email:'',
    password:''
  });
  const [hasAc,setHasAc]=React.useState(true);
  const clearInput=()=>{
    setEmail('')
    setPassword('')
  }
  const clearError=()=>{
    setError({
      email: "",
      password: "",
    });
  }
  const handleLogin=()=>{
    clearError()
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setError(prev=>{
            return {
              ...prev,
              email:err.message
            }
          })
          break;
        case "auth/wrong-password":
          setError(prev=>{
            return {
              ...prev,
              password:err.message
            }
          })
          break;
        default:
          break;
      }})      
    }
  const handleSignUp=()=>{
    clearError();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-already-in-use":
        case "auth/invalid-email":
          setError(prev=>{
            return {
              ...prev,
              email:err.message
            }
          })
          break;
        case "auth/weak-password":
          setError(prev=>{
            return {
              ...prev,
              password:err.message
            }
          })
          break;
          default:
            break;
      }})      
    }
  const handleLogout=()=>{
    fire.auth().signOut();
  }
  const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInput();
        setUser(user)
      }
      else{
        setUser("")
      }
    })
  }

  React.useEffect(() => {
    authListener();
  }, [])
  return (
		<BrowserRouter>
			<Switch>
				{user === "" ? (
					<Route
						path="/"
						render={() => (
							<Login
								email={email}
								password={password}
								setEmail={setEmail}
								setPassword={setPassword}
								handleLogin={handleLogin}
								handleSignUp={handleSignUp}
								hasAc={hasAc}
								setHasAc={setHasAc}
								error={error}
								setError={setError}
							/>
						)}
					/>
				) : (
					<>
						<Route path="/feedback/:roomID" component={Feedback} />
						<Route path="/joinRoom/:roomID" component={VideoCall} />
						<Route path="/room/:roomID" component={Room} />
						<Route
							path="/"
							render={() => (
								<CreateRoom handleLogout={handleLogout} />
							)}
						/>
					</>
				)}
			</Switch>
		</BrowserRouter>
  );
}

export default App;
