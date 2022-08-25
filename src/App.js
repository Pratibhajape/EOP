import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.components';
import Header from './components/header.components';
import Footer from './components/Footer.components';
import Section from './components/section.components';
import About from './pages/about.pages';
import Home from './pages/home.pages';
import Team from './pages/team.pages';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Header/>
        <Routes>
          <Route path ="/about" exact element={<About/>}/>
          <Route path ="/home" exact element={<Home/>}/>
           <Route path ="/team" exact element={<Team/>}/>
        </Routes>
      </Router>
    {/* <Navbar/>
     <Header/>
    <Section/>
    <Footer/>  */}
    </div>
  );
}

export default App;
