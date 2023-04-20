import React from 'react';
import css from './About.module.css';

export default function About() {
    return (
      <main className='container row'>
        <div className="align-item center">
          <h1>About Me</h1>
          <img width="350px" alt="MeAndPartner" src={`${process.env.PUBLIC_URL}/assets/images/MeCircle.jpg`}></img>
          <p className={`col s12 ${css.aboutText}`}>
          Hey I'm Mark Napolitano, a 27 year old full stack developer from Perth, Australia.<br/>
          I am hardworking with a strong desire to continue learning and improving. <br/>
          My years of being in a leadership position gives me the knowledge to understand what <br/>
          makes a company successful and how to best perform in my given role, <br/>
          In my free time I love going to the zoo and trying amazing food.
          </p>
        </div>
      </main>
    );
}