import React, {Component} from 'react';
import {Animated} from "react-animated-css";

import ProfileImg from '../icons/profile-image.png';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profilePicture">
                    <Animated animationIn="fadeInUp">
                        <img alt="Profile" src={ProfileImg} />
                    </Animated>
                </div>
            </div>
        );
    }
}

export default Profile;