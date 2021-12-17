import { useRef } from 'react';
import Card from '../Interface/Card';
import classes from './NewUserForm.module.css';

function NewUserForm(props) {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const totalAmountBorrowedInputRef = useRef();


    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredAmountBorrowed = totalAmountBorrowedInputRef.current.value;

        const userData = {
            name: enteredTitle,
            address: enteredAddress,
            totalAmountBorrowed: enteredAmountBorrowed,
        };

        props.onAddUser(userData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>
                        Name
                    </label>
                    <input type='text' required id = 'title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>
                        Address
                    </label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='totalAmountBorrowed'>
                        Total Amount Borrowed
                    </label>
                    <input type='text' required id='totalAmountBorrowed' ref={totalAmountBorrowedInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Create User</button>
                </div>
            </form>
        </Card>
    );
}

export default NewUserForm;