import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import EventItem from "./EventItem";
import Spinner from '../shared/Spinner';


function EventsList() {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const events = useSelector(state => state.events.data);

  // return loading ?
  //   <Spinner /> :
  return (
      <div className='event-list'>
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
