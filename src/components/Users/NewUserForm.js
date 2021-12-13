import Card from '../Interface/Card';
import classes from './NewUserForm.module.css';

function NewUserForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>
                        Name
                    </label>
                    <input type='text' required id = 'title'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>
                        Address
                    </label>
                    <input type='text' required id='address' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='totalAmountBorrowed'>
                        Total Amount Borrowed
                    </label>
                    <input type='text' required id='totalAmountBorrowed' />
                </div>
                <div className={classes.actions}>
                    <button>Create User</button>
                </div>
            </form>
        </Card>
    );
}

export default NewUserForm;