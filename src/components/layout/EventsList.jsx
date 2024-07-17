import '../css/EventsList.css';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import EventItem from "./EventItem";
import ColorContext from '../../context/ColorContext';
import Spinner from '../shared/Spinner';
import { motion, AnimatePresence } from 'framer-motion';


function EventsList() {
  // console.log(useSelector)
  const { isDark } = useContext(ColorContext);
  const events = useSelector(state => { 
    // console.log( state.events)
    return state.events.data });
  // console.log(events)
  const isLoading = useSelector(state => state.events.loading);

  return isLoading ?
    <Spinner /> : (
      <div className={`event-list event-list-${isDark ? 'dark' : 'light'}`}>
        <AnimatePresence>
          {events.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EventItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
}

export default EventsList;
