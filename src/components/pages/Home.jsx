import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to this website to play with React and APIs{" "}
        <span role="img" aria-label="spaceship">
          🚀
        </span>
      </p>
      <p>To start, you need to:</p>
      <ol>
        <li>
          Install React Router DOM: <code>$ npm install react-router-dom</code>
        </li>
        <li>
          In <u>src/index.js</u>, wrap the <code>App</code> component with{" "}
          <code>BrowserRouter</code>
        </li>
        <li>
          In <u>src/components/App.jsx</u>, add a <code>Switch</code> and some{" "}
          <code>Route</code>
        </li>
        <li>
          In <u>src/components/Navbar.jsx</u>, add some <code>NavLink</code> to
          replace the <code>{"<a>"}</code> tags.
        </li>
      </ol>
    </div>
  );
}
