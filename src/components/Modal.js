function Modal (props){

    function cancelHandler(){
        props.onCancel();
    }
    function checkStatusHandler(){
        props.onCheckStatus();
    }

    return(
        <div className = 'modal'>
            <p>Are you sure about this information?</p>
            <button className ='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className = 'btn' onClick={checkStatusHandler}>Check Status</button>
        </div>
    );
}

export default Modal;