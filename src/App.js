
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}/>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/login' element={<Login></Login>}/>
            <Route path = '/register' element={<Register></Register>}/>
            <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
