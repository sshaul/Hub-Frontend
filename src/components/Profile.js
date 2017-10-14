import React, {Component} from 'react';

import ProfileImg from '../icons/profile-image.png';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <img className="animated fadeInUp" alt="Profile Image" src={ProfileImg} />
            </div>
        );
    }
}

export default Profile;