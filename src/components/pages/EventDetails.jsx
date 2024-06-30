import { useEffect } from 'react';
import Music from '../../assets/Music.jpg';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchDataById } from '../../state/actions';

function EventDetails() {

    // const { id } = useParams(); // Get id from route params
    // const dispatch = useDispatch();
    // const data = useSelector(state => state.data);

    // useEffect(() => {
    //     dispatch(fetchDataById(id)); // Fetch data based on id
    // }, [ id]);

    return (
        <div className="details-container">
            <img src={Music} alt="Intezaar Tera Tour - Raghav Meattle" className="event-image" />
            <div className="event-details">
                <h1>Intezaar Tera Tour - Raghav Meattle</h1>
                <div className="event-info">
                    <div>
                        <p><strong>Date:</strong> June 30, 2024</p>
                        <p><strong>Time:</strong> 7:00 PM</p>
                    </div>
                    <div>
                        <p><strong>Venue:</strong> Some Venue, Bengaluru</p>
                        <p><strong>Price:</strong> ₹499 onwards</p>
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