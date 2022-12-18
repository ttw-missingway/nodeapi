import { useState } from "react";

export default function Register() {
  //state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      console.log(name, email, password);
    }
    catch (err){
      console.log(err);
    }
  }

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