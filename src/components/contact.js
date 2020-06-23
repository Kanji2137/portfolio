import React, { Component } from 'react';

import legoBoy from '../img/legoBoy/legoBoy1.png'; 

class contact extends Component {
    

    render() {
            return (
                <div className="Contact">
                   <div className="Contact">
                        <h1>Get in touch</h1>
                        <h3><div className="mailInContact">samuel.zabczynski@gmail.com</div></h3>
                    </div>
                    <img src={legoBoy} className="contactImg"/>
                </div>
            );
    }
}

export default contact; 