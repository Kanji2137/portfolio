import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListOfProjects extends Component {
    render() {
            return (
                <div className="sizeListOfProjects" id="listOfProj">
                    <div className="containerForLists">
                        <div className="listLeft">
                            {this.props.projectsL.map((project, id) => {
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
                            {this.props.projectsR.map((project, id) => {
                                return (
                                    <div key={id} className="boxMiniProjectR" id={project.id}> 
                                        <div className="imgToMiniListR">
                                        <a href={project.link} target="_blank"><img src={project.imgOfProject} className="imgToMiniList2" /></a>
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

ListOfProjects.propTypes = {
    projectsL: PropTypes.array.isRequired,
    projectsR: PropTypes.array.isRequired
};

export default ListOfProjects; 