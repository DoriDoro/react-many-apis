import React from 'react';
import MainNavbar from './Navbar'
import Home from './pages/Home';
import PopularGithub from './pages/PopularGithub';
import CrudTodos from './pages/CrudTodos';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        <Switch> 
        
          <Route exact path="/" component={Home} />
          <Route exact path="/popular-github" component={PopularGithub} />
          <Route exact path="/crud-todos" component={CrudTodos} />
        
        </Switch>

      </div>
    </div>
  );
}

export default App;
