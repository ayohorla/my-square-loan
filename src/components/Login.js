import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Login() {

    const [modalOpen, setModalOpen] = useState(false);

    function loginHandler(){
        setModalOpen(true);
    }
    function registerHandler(){
        setModalOpen(true);
    }
    function closeModalHandler(){
        setModalOpen(false);
    }
    return (
        <div className='card'>
            <h2>Loan Status Verification Hub</h2>
            <div className='actions'>
                <button className='btn' onClick = {loginHandler}>Login</button>
                <button className='btn1' onClick = {registerHandler}>Register</button>
            </div>

            {modalOpen && <Modal onCancel = {closeModalHandler} onCheckStatus={closeModalHandler}/>}
            {modalOpen && <Backdrop onClose={closeModalHandler}/>}
        </div>
    );

}

export default Login;