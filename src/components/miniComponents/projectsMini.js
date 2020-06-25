import React, { Component } from 'react';

import { FaReact, FaCss3Alt, FaHtml5} from 'react-icons/fa';
import logoBlenderBlack from '../../img/logoBlender/blender_logo_2Black.png'; 
import logoBlenderFullCol from '../../img/logoBlender/blender_logo_socket2.png';

import legoGuy from '../../img/GifLegoGuy/legoGuyGif2.gif'

import { Link } from "react-scroll";

class ProjectsMini extends Component {

    render() {
        return (
            <div className="sizeProjMini" id="proMini">
                <img src={legoGuy} className="imgLegoMiniCont"/>
                <div className="divConProjMiniParent">
                    <div className="triangleBOTTOM_L">
                        <div className="triangleLUP"></div>
                        <div className="triangleLD"></div>
                    </div>

                    
                    <div className="divConProjMiniChild">
                    <div className="part">
                        <div className="iconParent">
                            <Link
                            className="arrowChild"
                            activeClass="active"
                            to="listOfProj"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {700}
                            ><FaReact className="icons"/></Link>
                        </div>

                        <div className="iconParent2">
                        <Link
                            className="arrowChild"
                            activeClass="active"
                            to="listOfProj"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {700}
                            >
                                <FaCss3Alt className="icons2"/>
                        </Link>
                        </div>
                    </div>
                    <div className="part2">
                        <div className="iconParent3">
                        <Link
                            className="arrowChild"
                            activeClass="active"
                            to="listOfProj"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {700}
                            >
                            <FaHtml5 className="icons3"/>
                        </Link>
                        </div>
                        
                        <div className="blendLogoContainer">
                            <Link
                                className="arrowChild"
                                activeClass="active"
                                to="listOfProj"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}
                                >
                                <img src={logoBlenderFullCol} alt="logoBlender" className="bottom"/>
                                <img src={logoBlenderBlack} alt="logoBlender" className="top"/>
                            </Link>
                        </div>
                    </div>
                        
                    </div>
                    <div className="triangleBOTTOM_R">
                        <div className="triangleRUP"></div>
                        <div className="triangleRD"></div> 
                    </div>
                </div>
            </div>
            
         );
    }
}

export default ProjectsMini; 