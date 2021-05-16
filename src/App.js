// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Application from './pages/Application';
import Progress from './pages/Progress';
import Contact from './pages/Contact';



const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div >
          <Home />
          <Application />
          <About />
          <Progress />
          <Contact />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app" component={Application} />
          <Route exact path="/about" component={About} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/contact" component={Contact} />
        </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
