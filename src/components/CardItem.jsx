import React, { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

const CardItem = () => {

    const users = useContext(UsersContext);

    console.log(users);

    return (
        <React.Fragment>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 sm:grid-cols-1 mt-4" >
                    {users && users.map((user, index) =>
                    <div className="text-center max-w-sm rounded-lg relative overflow-hidden shadow-md ml-3 mb-4 pt-2 pb-2" key={index} >
                        <img src={user.avatar_url} className="w-24 h-24 mb-3 rounded-full inline-block" />
                        <h2 className="block mb-3 text-1xl font-medium text-blue-900 ml-3" >{user.login}</h2>
                        <a href="#" className="block text-1xl bg-blue-500 hover:bg-blue-400 text-white font-bold p-1" >
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
