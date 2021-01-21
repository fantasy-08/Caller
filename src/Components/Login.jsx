import React from 'react'
import Typography from "@material-ui/core/Typography";
import './Login.styles.css'
function Login(props) {
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAc,
        setHasAc,
        error,
        setError
    } = props;
    const [confirm,setConfirm]=React.useState('');
    const handleSignUP=()=>{
        if(confirm!==password){
            setConfirm('')
            setPassword('')
            setError(prev=>{
                return {
                    ...prev,
                    password:"password don't match"
                }
            })
        }else{
            handleSignUp();
        }
    }
    const ToggleAC=()=>{
        setHasAc(!hasAc);
        setConfirm("");
        setPassword("");
        setError({email:'',password:''});
        setEmail('')
    }
    return (
		<section className="login">
			<div className="loginContainer">
				<div style={{ textAlign: "center" }}>
					<Typography variant="h6">
						<img
							style={{
								height: "50px",
								width: "50px",
								borderRadius: "0.5rem",
								marginTop: ".8rem",
							}}
							src="https://s3.amazonaws.com/ionic-marketplace/video-and-text-chat-app-backend/icon.png"
							alt="My logo"
						/>
					</Typography>
					<a href="https://servercaller.herokuapp.com/Caller/">
						<img
							src="https://fontmeme.com/permalink/210105/124cc05758940eb11cda869fcfe80ccd.png"
							alt="hindi"
							border="0"
						/>
					</a>
				</div>
				<label>Username</label>
				<input
					type="text"
					autoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{error.email}</p>
				<label>Password</label>
				<input
					type="password"
					autoFocus
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMsg">{error.password}</p>
				{!hasAc ? (
					<>
						<label>Confirm Password</label>
						<input
							type="password"
							autoFocus
							required
							value={confirm}
							onChange={(e) => setConfirm(e.target.value)}
						/>
					</>
				) : (
					<></>
				)}
				<div className="btnContainer">
					{hasAc ? (
						<>
							<button onClick={handleLogin}>Sign In</button>
							<p>
								Don't have an account?
								<span onClick={ToggleAC}>Sign up</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSignUP}>Sign Up</button>
							<p>
								Already have an account?
								<span onClick={ToggleAC}>Sign In</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
}

export default Login
