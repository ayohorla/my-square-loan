import Card from '../components/Interface/Card';
import classes from '../components/Users/NewUserForm.module.css';

function Login() {

    function loanStatusHandler(userData){
        fetch(
            'https://my-square-loan-default-rtdb.firebaseio.com/users.json'
        ).then((Response) => {
            Response.json(userData);
        })
        console.log(userData);
    }
    return (
        <section>
            <h1>Sign In Your Account</h1>
            <Card>
                <form className={classes.form} onClick={loanStatusHandler}>
                    <div className={classes.control}>
                        <label htmlFor='title'>
                            Name
                        </label>
                        <input type='text' required id='title' />
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