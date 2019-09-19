import React from 'react';
import MainNavbar from './Navbar'
import Home from './pages/Home';
import PopularGithub from './pages/PopularGithub';
import CrudTodos from './pages/CrudTodos';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        <Home />
        <PopularGithub />
        <CrudTodos />
      </div>
    </div>
  );
}

export default App;
