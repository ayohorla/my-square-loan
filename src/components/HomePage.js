import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';
import SignIn from './SignIn';

function HomePage() {

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
    function openSignInHandler(){
        setModalOpen(true);
    }
    return (
        <div className='card'>
            <h2>Loan Status Verification Hub</h2>
            <div className='actions'>
                <button className='btn' onClick = {loginHandler}>Login</button>
                <button className='btn1' onClick = {registerHandler}>Register</button>
            </div>

            {modalOpen && <Modal onCancel = {closeModalHandler} onSignIn={closeModalHandler}/>}
            {modalOpen && <Backdrop onClose={closeModalHandler}/>}
            {modalOpen && <SignIn onClick= {openSignInHandler}/>}
        </div>
    );

}

export default HomePage;