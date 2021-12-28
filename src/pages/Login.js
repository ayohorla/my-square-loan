import { useEffect, useRef} from 'react';
import Card from '../components/Interface/Card';
import classes from '../components/Users/NewUserForm.module.css';

function Login(props) {
    const titleInputRef = useRef();

    function loanStatusHandler (e) {
        e.preventDefault (); 
        fetch(
            'https://my-square-loan-default-rtdb.firebaseio.com/users.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            console.log();

        });
    };
    useEffect(() => {
        ;
    }, []);

    return (
        <section>
            <h1>Check Account Status</h1>
            <Card>
                <form className={classes.form} onClick={loanStatusHandler}>
                    <div className={classes.control}>
                        <label htmlFor='title'>
                            Name
                        </label>
                        <input type='text' required id='title' ref={titleInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button>Loan Status</button>
                    </div>

                </form>
            </Card>
        </section>
    );
}

export default Login;