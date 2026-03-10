    import { useEffect, useState } from "react";
    import {useNavigate} from 'react-router-dom'

    function UsersList() {
    let [users, setUsers] = useState([]);
    let navigate=useNavigate()

    useEffect(() => {
        async function getUsers() {
        try {
            let res = await fetch("http://localhost:4000/user-api/user", {
            method: "GET",
            });

            if (res.status === 200) {
            //extract json data
            let resObj = await res.json();
            //update the state
            setUsers(resObj.payload);
            } else {
            //set error
            }
        } catch {
            //set error
        }
        }

        getUsers();
    }, []);


    //go to user
    const gotoUser=(userObj)=>{
        navigate("/user",{state:{user:userObj}})
    }

    return (
        <div className="m-10">
        <h1 className="text-5xl text-center font-extrabold text-gray-800 m-3">List of Users</h1>
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {users?.map((userObj) => (
            <div key={userObj.email} className="p-10 shadow-2xl bg-amber-200 cursor-pointer rounded" onClick={()=>gotoUser(userObj)}>
                <p className="text-3xl font-bold text-center p-2">{userObj.name}</p>
                <p className="text-2xl text-center font-light">{userObj.email}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default UsersList;