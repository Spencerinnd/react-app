import logo from './img/AVI.png';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';




function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact-us' component={Contact} />
      <Route path='/sign-up' component={SignUp} />
    </Switch>
    <div>
      <h1>My React App</h1>
        <h2>Author: Spencer Cook</h2>
        <img src={logo} alt="Could not display AVI" />
    </div>
  </Router>

);
}

export default App;
