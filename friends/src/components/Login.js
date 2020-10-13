
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login() {
const history = useHistory();
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChanges = (e) => {
       const newFormData = {
           ...form,
           [e.target.name]: e.target.value,
       };
       setForm(newFormData)
        
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', form)
            .then((res) => {
                window.localStorage.setItem('token', res.data.payload);
                history.push('/friendsList')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    

    return (
        <div>   
            <form onSubmit={handleLogin}>
                
                <input type='text' name='username' placeholder='username' onChange={handleChanges} value={form.username} />
                
                <input type='password' name='password' placeholder='password' onChange={handleChanges} value={form.password}  />
                
                <button> Log In</button>
            </form>
        </div>
    )
}

export default Login;
