import { useNavigate } from 'react-router-dom';
import '../css/EventItem.css';

function EventItem({ item }) {
    const navigate = useNavigate();

    const getImgName = (name) => {
        return name.split(' ').join('');
    }

    const formatDate = (date) => {
        date = new Date(date).toDateString();
        return date;
    }

    const onButtonClick = (id) => {
        navigate(`/details/${id}`); // Navigate to /details/:id
    };

    return (
        <div className="card">
            <img src={require(`../../assets/${getImgName(item.category)}.jpg`)} alt={item.category} />
            <div className="card-content">
                <h3>{item.category}</h3>
                <p></p>
                <p>{item.time} , {formatDate(item.date)}</p>
                <p>Location: {item.city}</p>
                <p>Venue: {item.venue}</p>
                <button onClick={() => onButtonClick(item.id)} className="btn">Buy</button>
            </div>
        </div>
    )
}

export default EventItem;
