import React from 'react';

export default function Project(props) {
    // console.log(props.projects)
    return (
        <div>
            {props.projects.map((project) => {
                return (
                    <h1 key={project.id}>{project.title}</h1>
                )
            })}
        </div>
    )
    }
