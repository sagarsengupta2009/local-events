import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MainBody from './components/layout/MainBody';
import EventDetails from './components/pages/EventDetails';

function App() {
  return (
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
  );
}

export default App;
