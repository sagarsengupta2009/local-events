import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import EventItem from "./EventItem";
import store from '../../state/store';
import Spinner from '../shared/Spinner';
import { fetchEventRequest, fetchEventSuccess, fetchEventFailure } from '../../state/actions';


function EventsList({ fetchData, data, loading, error }) {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
  let path;
  useEffect(() => {
    console.log('hello from eventList');

    const fetchData = async () => {
      setIsLoading(true);
      try {

        const response = await fetch('http://localhost:5000/allEvents');
        const allEventsData = await response.json();
        setEventList(allEventsData);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        fetchEventSuccess(data);
      } catch (error) {
        fetchEventFailure(error.message);
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchEventRequest, fetchEventSuccess, fetchEventFailure]);

  return isLoading ?
    <Spinner /> :
    (
      <div className='event-list'>
        <AnimatePresence>
          {eventList.map((item) => (
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

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  fetchEventRequest,
  fetchEventSuccess,
  fetchEventFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

// export default EventsList
