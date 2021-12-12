function Modal (props){

    function cancelHandler(){
        props.onCancel();
    }
    function signInHandler(){
        props.onSignIn();
    }

    return(
        <div className = 'modal'>
            <p>Are you sure about this?</p>
            <button className ='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className = 'btn' onClick={signInHandler}>Sign-In</button>
        </div>
    );
}

export default Modal;