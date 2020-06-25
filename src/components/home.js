import React, { Component } from 'react';

import { Link } from "react-scroll";

import { FaArrowDown } from 'react-icons/fa';

import firstFace from '../img/avatar/first1.png'; 
import secondFace from '../img/avatar/second1.png'; 
import thirdFace from '../img/avatar/third.png'; 
import fourthFace from '../img/avatar/fourth.png'; 

import ProjectsMini from './miniComponents/ProjectsMini'

import ListOfProjects from './miniComponents/ListOfProjects'
import projectsL  from '../data/MiniListOfProjectsL';
import projectsR  from '../data/MiniListOfProjectsR';

import Foot from './miniComponents/Foot';

class Home extends Component {
    render(){
        return (
            <div className="home">
                <div className="face">
                    <img src={firstFace} alt="firstFace" className="homeImgAbsolute"/>
    
                    <div className="div1">
                    </div>
                    <img src={firstFace} alt="firstFace" className="homeImg"/>
                    
                    <div className="div2">
                    </div>
                    <img src={secondFace} alt="secondFace" className="homeImg"/>
                    
                    <div className="div3">
                    </div>
                    <img src={thirdFace} alt="thirdFace" className="homeImg"/>
                    
                    <div className="div4">
                    </div>
                    <img src={fourthFace} alt="fourthFace" className="homeImg"/>
                    
                    <div className="arrowParent">
                        <Link
                                className="arrowChild"
                                activeClass="active"
                                to="proMini"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}
                        ><FaArrowDown/></Link>
                    </div>
                    <img src={fourthFace} alt="fourthFace" className="homeImg"/>
                    
                </div>
                <ProjectsMini/>
                <ListOfProjects projectsL={projectsL} projectsR={projectsR}/>
                <Foot/>
            </div>
        );
    }
}

export default Home;