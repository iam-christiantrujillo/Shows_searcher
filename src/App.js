import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ShowAbout from './components/show_info/Show_about'

function App() {
  return (
    
    <Router>

      <Switch>

        <Route exact path = "/">
          <Home />
        </Route>

        <Route exact path = "/show/:idShow">
          <ShowAbout />
        </Route>


      </Switch>

    </Router>



    
      
    
  );
}

export default App;
