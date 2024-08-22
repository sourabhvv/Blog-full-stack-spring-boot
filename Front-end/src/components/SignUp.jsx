import React, { useState } from 'react';
import { json } from 'react-router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { BASE_URL } from '../util/config';
function SignUp() {
  
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname,setFullname] = useState("");


 

  const handleSubmit = async(e) =>{
    e.preventDefault();

      await axios.post(`${BASE_URL}/auth/signup`,{
      password:password,
      email:email,
      fullName:fullname,
    }).then(function(response){
      if(response.status==201){
        localStorage.setItem('id',response.data.user._id);
        localStorage.setItem('username',response.data.user.username);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('email',response.data.user.email);
        window.location.href = '/dashboard';
         
      }

    }).catch(function(error){
      console.log(error);
    });

    };



  
  
  return (
    <>
            <div className="w-full bg-grey-500">
                <div className="container mx-auto py-8">
                    <div className="w-96 mx-auto bg-white rounded shadow">
                  
                            <div className="py-4 px-8">

                            <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2"> Full name</label>
                                    <input
                                        className="border rounded w-full py-2 px-3 text-grey-darker"
                                        type="text"
                                        value={fullname}
                                        placeholder="Full name"
                                        onChange={(e) => setFullname(e.target.value)}
                                    />
                                </div>
                               
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Email</label>

                                    <input
                                        className="border rounded w-full py-2 px-3 text-grey-darker"
                                        type="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                

                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Password</label>

                                    <input
                                        className="border rounded w-full py-2 px-3 text-grey-darker"
                                        type="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            

                                <div className="mb-4">
                                    <button 
                                        onClick={handleSubmit}
                                        type="button"
                                        className="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 "
                                    >
                                        Register
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                     already an account? <Link to="/Login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                               </p>
                                </div>
                            </div>
                    

                    </div>

                </div>
            </div>

        
    </>
  );
}

export default SignUp;
