import React, { Component } from 'react';
import '../../App.css';

import projectsL  from '../../listOfProjects/MiniListOfProjectsL';
import projectsR  from '../../listOfProjects/MiniListOfProjectsR';

class listOfProjects extends Component {
    

    render() {
            return (
                <div className="sizeListOfProjects" id="listOfProj">
                    <div className="containerForLists">
                        <div className="listLeft">
                            {projectsL.map((project, id) => {
                                return (
                                    <div key={id} className="boxMiniProjectR"  id={project.id}> 
                                        <div className="imgToMiniListR">
                                            <a href={project.link} target="_blank"><img src={project.imgOfProject} className="imgToMiniList2"/></a>
                                        </div>
                                        <div className="textUnderImgList" style={{color:project.color}}>{project.NameOfProject}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="listRight">
                            {projectsR.map((project, id) => {
                                return (
                                    <div key={id} className="boxMiniProjectR"  id={project.id}> 
                                        <div className="imgToMiniListR">
                                            <img src={project.imgOfProject} className="imgToMiniList2"/>
                                        </div>
                                        <div className="textUnderImgList" style={{color:project.color}}>{project.NameOfProject}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
    }
}

export default listOfProjects; 