import '../css/EventCategories.css';
import { useContext } from 'react';
import ColorContext from '../../context/ColorContext';
import store from '../../state/store';
import { filterOnCategory } from '../../state/eventsSlice';
import { 
    FaMusic, 
    FaFutbol, 
    FaMicrophone, 
    FaMask, 
    FaWineGlass, 
    FaFilm,
    FaMeetup,
    FaHSquare,
    FaTasks
} from 'react-icons/fa';

function EventCategories() {
    const { isDark } = useContext(ColorContext);

    const filterEventsByCategory = (event) => {
        const iconCategory = event.currentTarget.children[1].innerText;
        store.dispatch(filterOnCategory(iconCategory));
    }

    return (
        <div className={`categories-container categories-container-${isDark ? 'dark' : 'light'}`}>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaMusic color="purple" />
                    <span>Music</span>
                </button>
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaFutbol className='fa-2xl' color="purple" />
                    <span>Sports</span>
                </button>
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaHSquare className='fa-2xl' color="purple" />
                    <span>Health</span>
                </button>
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaMicrophone color="purple" />
                    <span>Standup Comedy</span>
                </button>
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaMask color="purple" />
                    <span>Play</span>
                </button>
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaFilm color="purple" />
                    <span>Movie</span>
                </button>
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaTasks color="purple" />
                    <span>Workshop</span>
                </button>                
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaWineGlass color="purple" />
                    <span>Drink</span>
                </button>                
            </div>
            <div>
                <button onClick={filterEventsByCategory} className='icons'>
                    <FaMeetup color="purple" />
                    <span>Conference</span>
                </button>
            </div>
        </div>
    )
}

export default EventCategories
