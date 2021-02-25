import { useState } from 'react';
import { Auth } from "aws-amplify";

export default function Login() {
	let [email,setEmail] = useState("");
	let [password,setPassword] = useState("");
	
	let handleSubmit = async function (event) {
		event.preventDefault();
        let response = await Auth.signIn(email, password);
        console.log("auth response",response);
	};
	
	return (
		<div>
			<div>
				<h2>Sign in to your account</h2>
				<p>or {" "} 
				<a href="#">create one</a>
				</p>
			</div>
			<input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
			<input type="password" value={password} onChange={(e)=>{
                console.log(e.target.value)
                setPassword(e.target.value)}}></input>
			<button onClick={handleSubmit}>Submit</button>
		</div>
		)
}