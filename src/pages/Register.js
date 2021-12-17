import { useHistory } from "react-router-dom";

import NewUserForm from "../components/Users/NewUserForm";

function Register() {
    const history =useHistory();

    function onAddUserHandler(userData){
        fetch(
            'https://my-square-loan-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>Create Account</h1>
            <NewUserForm  onAddUser = {onAddUserHandler}/>
        </section>
    );
}

export default Register;