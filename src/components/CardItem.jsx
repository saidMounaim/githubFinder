import React, { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

const CardItem = () => {

    const users = useContext(UsersContext);

    console.log(users);

    return (
        <React.Fragment>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 mt-4">
                    {users && users.map((user, index) =>
                    <div className="max-w-sm rounded relative overflow-hidden shadow-md ml-3 mb-4 pt-2 pb-2" key={index} >
                        <img src={user.avatar_url} className="w-24 h-24 rounded-full inline-block" />
                        <h2 className="inline-block text-1xl font-medium text-blue-900 ml-3" >{user.login}</h2>
                        <a href="#" className="text-1xl bg-blue-500 hover:bg-blue-400 text-white font-bold p-1" >
                            View profile
                        </a>
                    </div>
                    )}                      
                </div>
            </div>

        </React.Fragment>
    )
}

export default CardItem
