import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //state
  const [email, setEmail] = useState('dylan@gmail.com');
  const [password, setPassword] = useState('qwerty');
  //hook
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, {
        email,
        password,
      });

      console.log(data);

      if (data?.error){
        toast.error(data.error);
      }
      else{
        localStorage.setItem('auth', JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user});
        toast.success('Login Successful');
        navigate("/content");
      }
    }
    catch (err){
      console.log(err);
      toast.error("Login Failed");
    }
  };

  return (
    <div>
      <h1>
        Login
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="form-control mb-4 p-2" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                autoFocus  
              />
              <input 
                type="password" 
                className="form-control mb-4 p-2" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                autoFocus  
              />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}