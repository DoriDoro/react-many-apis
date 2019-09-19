import React from "react";

export default function PopularGithub() {
  return (
    <div>
      <h1>Popular on GitHub</h1>
      <p>To get popular repositories, you need to:</p>
      <ol>
        <li>
          Instal Axios: <code>$ npm install axios</code>
        </li>
        <li>
          Create a state <code>repos</code>, initially set to <code>[]</code>
        </li>
        <li>
          Perform an API call to:{" "}
          <code>
            GET
            https://api.github.com/search/repositories?sort=stars&q=language:javascript
          </code>
          . <br />
          It should be inside a{" "}
          <code>useEffect(() => {"{"} /* ... */ }, [])</code>
        </li>
        <li>
          Change the state <code>repos</code> (with <code>setRepos</code>) by
          using information from the API response
        </li>
        <li>
          Display the list of all <code>repos</code>
        </li>
      </ol>
    </div>
  );
}
