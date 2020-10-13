import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';


function FriendsList() {

    const [friendForm, setFriendForm] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: '',
    })

    const handleChanges = (e) => {
        const newFormData = {
            ...friendForm,
           [e.target.name]: e.target.value, 
        }
        setFriendForm(newFormData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', friendForm)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [data, setData] = useState([]);

    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    // const [clicked, setClick] = useState(true);

    useEffect(() => {
        getData();
        console.log(data)
    }, )

    return (
        <div>
            <h1>Friends List</h1>
            {data.map((friends) => (
                <h4 key={friends.id}>{friends.name}</h4>
            ))}
            <h2>Add a Friend Below</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' value={friendForm.name} onChange={handleChanges} />
                <input type='text' name='age' placeholder='age' value={friendForm.age} onChange={handleChanges} />
                <input type='email' name='email' placeholder='email' value={friendForm.email} onChange={handleChanges}/>
                <button>Add a Friend</button>
            </form>
        </div>
    )
}

export default FriendsList
