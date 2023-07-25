import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Tour from './Tour';
import Contact from './Contact';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs/>
            </Route>
            <Route path="/infonorthernlights">
              
            </Route>
            <Route path="/our-toursinrovaniemi">
              
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/tour/:id">
              <Tour/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
