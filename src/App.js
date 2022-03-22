import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Doctors from './Pages/Home/Doctors/Doctors';
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctor' element={<Doctors />} />
          <Route path='/doctor/:id' element={<DoctorDetails />} />
          <Route path='/service/:id' element={<ServiceDetails />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
