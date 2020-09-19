import React  from 'react';
import Principal from './components/principal';
import Producto from './components/producto'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="conatiner mt-2">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
        </div>
        <h1>
          Duvan Shop
        </h1>
        <hr/>
        <Switch>
          <Route path="/productos/:id"> 
            <Producto/>
          </Route>
          <Route path="/">
            <Principal/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
