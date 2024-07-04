import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../shared/Spinner';
import '../css/EventDetails.css';
import ColorContext from '../../context/ColorContext';

function EventDetails() {
    const { isDark } = useContext(ColorContext);
    const { id } = useParams(); // Get id from route params
    const events = useSelector(state => state.events.data);
    const isLoading = useSelector(state => state.events.loading);

    let selectedEvent = events.find(item => {
        return item.id === id;
    });

    const getImgName = (name) => {
        return name.split(' ').join('');
    }

    return isLoading ?
        <Spinner /> : (
            <div className={`details-container details-container-${isDark ? 'dark' : 'light'}`}>
                <img src={require(`../../assets/${getImgName(selectedEvent.category)}.jpg`)} alt="Intezaar Tera Tour - Raghav Meattle" className="event-image" />
                <div className="event-details">
                    <h1>{selectedEvent.category}</h1>
                    <div className="event-info">
                        <div>
                            <p><strong>Date : </strong>{selectedEvent.date}</p>
                            <p><strong>Time : </strong>{selectedEvent.time}</p>
                        </div>
                        <div>
                            <p><strong>Venue : </strong>{selectedEvent.venue} , {selectedEvent.city}</p>
                            <p><strong>Price : </strong> {selectedEvent.ticketPrice} onwards</p>
                        </div>
                    </div>
                    <button className="book-button">Book Now</button>
                    <div className="description">
                        <h2>About the Event</h2>
                        <p>Join Raghav Meattle on his Intezaar Tera Tour for an unforgettable night of music in Bengaluru. Experience his soulful melodies and heartfelt lyrics live in concert.</p>
                        <h2>Artist Information</h2>
                        <p>Raghav Meattle is an Indian singer-songwriter known for his indie-pop style and emotive performances. His music blends acoustic melodies with thoughtful lyrics, creating a unique and captivating sound.</p>
                    </div>
                </div>
            </div>
        )
}


// function mapStateToProps(state, props) {
//     const eventDetails = state.events.filter( event => event.id === props.eventId)
//     return {
//         eventDetails
//     }
// }

export default EventDetails;