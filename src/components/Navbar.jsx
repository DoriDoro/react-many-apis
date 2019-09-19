import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a className="Navbar__link Navbar__link--main" href="/">
        React Many APIs
      </a>
      <a className="Navbar__link" href="/popular-github">
        Popular on GitHub
      </a>
      <a className="Navbar__link" href="/crud-todos">
        CRUD TODOs
      </a>
    </div>
  );
}
