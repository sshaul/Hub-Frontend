import React, {Component} from 'react';

import ProfileImg from '../icons/profile-image.png';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profilePicture">
                    <img className="animated fadeInUp" alt="Profile Image" src={ProfileImg} />
                </div>
                <div className="profileText">
                    <a class="settings"> Profile Settings </a>
                </div>
            </div>
        );
    }
}

export default Profile;