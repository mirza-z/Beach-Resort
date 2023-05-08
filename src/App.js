import './App.css';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

// Components 
import Navbar from './components/Navbar';

// Router Dom
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/rooms/' element={<Rooms/>}/>
        <Route exact path='/rooms/:slug' element={<SingleRoom/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
