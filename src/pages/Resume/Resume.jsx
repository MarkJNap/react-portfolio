import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown} from '@fortawesome/free-solid-svg-icons'

const skills = [
  
  {
    id: 1,
    name: "HTML"},

  {
    id: 2,
    name:"CSS"},

  {
    id: 3,
    name:"JavaScript"},

  {
    id: 4,
    name:'JQuery'},

  {
    id: 5,
    name:'React'},

  {
    id: 6,
    name:"MySQL"},

  {
    id: 7,
    name:'Sequelize'},

  {
    id: 8,
    name:"MongoDB"},

  {
    id: 9,
    name:"Mongoose"},

  {
    id: 10,
    name:"Node.JS"},

  {
    id: 11,
    name:'Express'},

  {
    id: 12,
    name:"GraphQL"} 
]

export default function Resume() {
    return (
      <main>
        <div className="align-item center">
          <h1>Resume</h1>
          <a className="btn" href={`${process.env.PUBLIC_URL}/assets/files/Mark_Resume.pdf`} download><FontAwesomeIcon icon={faFileArrowDown} size='xl' /> Download my Resume</a>
          <h2>Skills</h2>
          <div className='container row'>
            <ul className='col s12 align-item center'>
              {skills.map((skill) => {
                return (
                <li className="col s12 m4" key={skill.id}>{skill.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    );
}