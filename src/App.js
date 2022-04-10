// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Application from './pages/Application';
// import Progress from './pages/Progress';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <NavBar />
                <div>
                    <Home />
                    <Application />
                    <About />
                    {/* <Progress /> */}
                    <Contact />
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
