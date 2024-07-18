import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MainBody from './components/layout/MainBody';
import EventDetails from './components/pages/EventDetails';
import { ColorProvider } from './context/ColorContext';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEvents } from './state/eventsSlice';
import { fetchCities } from './state/citiesSlice';


function App() {
  const eventError = useSelector(state => state.events.error);
  const cityError = useSelector(state => state.cities.error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Loading all events on load of application
    dispatch(fetchAllEvents());
    //Loading all locations
    dispatch(fetchCities());

    if(eventError) {
      throw new Error("Error Fetching Events");
    }
    if(cityError) {
      throw new Error("Error Fetching cities");
    }
  }, [eventError, cityError]);

  return (
    <ColorProvider>
      <Router className='container'>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <MainBody />
              </>
            }>
          </Route>
          <Route path='/details/:id' Component={EventDetails} />
        </Routes>
        <Footer />
      </Router>
    </ColorProvider>
  );
}

export default App;
