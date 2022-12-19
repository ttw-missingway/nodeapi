import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  //state
  const [name, setName] = useState('Dylan');
  const [email, setEmail] = useState('dylan@gmail.com');
  const [password, setPassword] = useState('qwerty');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const { data } = await axios.post(`${process.env.REACT_APP_API}/register`, {
        name,
        email,
        password,
      });

      console.log(data);

      if (data?.error){
        toast.error(data.error);
      }
      else{
        toast.success('Registration Successsful');
      }
    }
    catch (err){
      console.log(err);
      toast.error("Registration Failed");
    }
  };

  return (
    <div>
      <h1>
        Register
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="form-control mb-4 p-2" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                autoFocus  
              />
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