import { useEffect, useState } from "react";

import UserList from "../components/Users/UserList";

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://my-square-loan-default-rtdb.firebaseio.com/users.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const users=[];

                for (const key in data){
                    const user ={
                        id: key,
                        ...data[key]
                    };

                    users.push(user);
                }

                setIsLoading(false);
                setLoadedUsers(users);
            }); 
    }, []);


    if (isLoading) {
        return (
            <section>
                
                <h1><p>Loading...</p></h1>
            </section>
        );
    }

    return (
        <section>
            <h1>User Details</h1>
            <UserList users={loadedUsers} />
        </section>
    );
}

export default Dashboard;