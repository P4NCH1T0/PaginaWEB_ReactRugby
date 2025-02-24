import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import News from './Pages/News'
import Landingpage from './Pages/Landingpage';
import Calendar from './Pages/Calendar';
import Galery from './Pages/Galery';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'> 
       <Navbar/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/Noticias' element={<News/>}/>
        <Route path='/Calendario' element={<Calendar/>}/>
        <Route path='/Galeria' element={<Galery/>}/>
        <Route path='/Equipo' element={<Team/>}/>
        <Route path='/Contacto' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
