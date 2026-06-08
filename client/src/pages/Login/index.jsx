
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword ] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
 e.preventDefault();

const response = await axios.post(
 "http://localhost:3001/api/auth/login",
 {
  email,
  password,
 }
);

localStorage.setItem(
 "token",
 response.data.token
);
navigate("/");
};

 return (
  <div className="min-h-screen flex items-center justify-center">
   <form 
   onSubmit={handleLogin}
   className="bg-white p-8 rounded-xl shadow-lg w-96">
    <h1 className="text-2xl font-bold mb-6 text-center">
     Admin Login
     </h1>
    <input 
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border p-3 rounded mb-4" 
    />
    <input 
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border p-3 rounded mb-4"
     />
    <button 
    type="submit"
    className="w-full bg-red-500 text-white p-3 rounded"
    >
     Login
    </button>
   </form>
  </div>
 );
};

export default Login;