import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from './miniComponents/Avatar'
import ProjectsMini from './miniComponents/ProjectsMini'
import ListOfProjects from './miniComponents/ListOfProjects'
import Foot from './miniComponents/Foot'

class Home extends Component {
    render(){
        return (
            <div className="home">
                <Avatar/>
                <ProjectsMini/>
                <ListOfProjects projectsL={this.props.projectsL} projectsR={this.props.projectsR}/>
                <Foot/>
            </div>
        );
    }
}

Home.propTypes = {
    projectsL: PropTypes.array.isRequired,
    projectsR: PropTypes.array.isRequired
};

export default Home;