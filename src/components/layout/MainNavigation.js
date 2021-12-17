import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';   

function MainNavigation(){
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Square Loan</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;