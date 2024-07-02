import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import EventItem from "./EventItem";
import Spinner from '../shared/Spinner';


function EventsList() {
  const events = useSelector(state => { return state.events.data });
  const isLoading = useSelector(state => state.events.loading);

  return isLoading ?
    <Spinner /> : (
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
