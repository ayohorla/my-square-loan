import Card from '../Interface/Card';
import classes from './UserItem.module.css';

function UserItem(props){
    return(
        <li className= {classes.item}>
        <Card>
            <div className={classes.content}>
                <h3>
                    {props.title}
                </h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To StatusPage</button>
            </div>
        </Card>
        </li>
    )
}

export default UserItem;