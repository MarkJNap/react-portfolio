import React from 'react';

export default function About() {
    return (
      <main>
        <div className="align-item center">
          <h1>About Me</h1>
          <img width="350px" alt="Me in a suit" src={`${process.env.PUBLIC_URL}/images/MeCircle.jpg`}></img>
          <p>
          Hey I'm Mark Napolitano, a 27 year old full stack developer from Perth, Australia.<br/>
          I am a hardworking person with a strong desire to continue learning and improving. <br/>
          My years of being in a leadership position gives me the knowledge to understand what <br/>
          makes a company successful and how to best perform in my given role, <br/>
          As well as work amazingly in a team and get the full enjoyment of the culture.
          </p>
        </div>
      </main>
    );
}