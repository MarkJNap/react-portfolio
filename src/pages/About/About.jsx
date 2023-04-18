import React from 'react';

export default function About() {
    return (
      <main>
        <div className="align-item center">
          <h1>About Me</h1>
          <img width="350px" alt="Me in a suit" src={`${process.env.PUBLIC_URL}/images/MeCircle.jpg`}></img>
          <p>
          About Me and stuff
          </p>
        </div>

      </main>
    );
}