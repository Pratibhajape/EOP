import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer.components';
import Section from './components/section.components';
import About from './pages/about.pages';
import Home from './pages/home.pages';
import Team from './pages/team.pages';
<<<<<<< HEAD
=======
import Register from './pages/register.pages';
import Header from './components/header.components';
import Navbar from './components/navbar.components';
>>>>>>> dfce883b4eeedfa8db43b641f9ddf1d7ab5204e4


function App() {
  return (
    <>
    <div className="App">
      <Router>
        
        <Routes>
          <Route path ="/about" exact element={<About/>}/>
          <Route path ="/home" exact element={<Home/>}/>
<<<<<<< HEAD
           <Route path ="/team" exact element={<Team/>}/>
=======
          <Route path ="/team" exact element={<Team/>}/>
          <Route path ="/register" exact element={<Register/>}/>
         
>>>>>>> dfce883b4eeedfa8db43b641f9ddf1d7ab5204e4
        </Routes>
      </Router>
      
    {/* <Navbar/>
     <Header/>
    <Section/>
    <Footer/>  */}
    </div>
   
    </>
  );
}

export default App;
