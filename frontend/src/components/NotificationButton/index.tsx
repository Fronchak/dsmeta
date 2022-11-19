import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/Vector.svg';
import { BASE_URL } from '../util/request';
import './styles.css'

type Props = {
    id: number;
}

function NotificationButton({id}: Props) {

    return (
        <div className="person-icon-container" onClick={() => handleClick(id)}>
            <img src={icon} />
        </div>
    )
}

function handleClick(id: number) {
    console.log(`Send to ${id}`);
    axios(`${BASE_URL}/sale/${id}/notification`)
        .then(response => {
            toast.info("Sms message send with sucess.");
        })
}

export default NotificationButton;