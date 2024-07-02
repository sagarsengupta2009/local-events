import '../css/EventCategories.css';
import { useContext } from 'react';
import ColorContext from '../../context/ColorContext';
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

    return (
        <div className={`categories-container categories-container-${isDark ? 'dark' : 'light'}`}>
            <div>
                <button className='icons'>
                    <FaMusic color="purple" />
                    <span>Music</span>
                </button>
            </div>
            <div>
                <button className='icons'>
                    <FaFutbol className='fa-2xl' color="purple" />
                    <span>Sports</span>
                </button>
            </div>
            <div>
                <button className='icons'>
                    <FaHSquare className='fa-2xl' color="purple" />
                    <span>Health</span>
                </button>
            </div>
            <div>
                <button className='icons'>
                    <FaMicrophone color="purple" />
                    <span>Standup Comedy</span>
                </button>
            </div>
            <div>
                <button className='icons'>
                    <FaMask color="purple" />
                    <span>Plays</span>
                </button>
            </div>
            <div>
                <button className='icons'>
                    <FaFilm color="purple" />
                    <span>Movies</span>
                </button>
            </div>
            <div>
                <button className='icons'>
                    <FaTasks color="purple" />
                    <span>Workshops</span>
                </button>                
            </div>
            <div>
                <button className='icons'>
                    <FaWineGlass color="purple" />
                    <span>Drink</span>
                </button>                
            </div>
            <div>
                <button className='icons'>
                    <FaMeetup color="purple" />
                    <span>Conference</span>
                </button>
            </div>
        </div>
    )
}

export default EventCategories
