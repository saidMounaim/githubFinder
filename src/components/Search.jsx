import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UsersContext } from '../context/UsersContext';
import CardItem from './CardItem';

const Search = () => {

    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    const handleChangeSearch = (event) => {
        setUsername(event.target.value);
    }

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get(`https://api.github.com/search/users?q=${username}`);
            setUsers(data.items);
        } catch(error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [username]);

    return (
        <UsersContext.Provider value={users} >
            <div className="search w-full h-64 bg-gray-100 grid grid-cols-2" >
                <div className="hero-text w-full flex items-center">
                    <h1 className="font-semibold text-5xl ml-56" >Find Profile <br />Github</h1>
                </div>
                <div className="form ml-10 flex items-center">
                    <form>
                    <div className="block">
                        <label 
                            htmlFor="search" 
                            className="text-2xl font-medium text-blue-900" >
                                Search
                        </label>
                        <input 
                            type="text"
                            name={username}
                            id="search"
                            className="shadow w-64 block mt-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Github Username"
                            autoComplete="off"
                            onChange={handleChangeSearch}
                        />
                    </div>
                    </form>
                </div>
            </div>
            <CardItem />
        </UsersContext.Provider>
    )
}

export default Search
