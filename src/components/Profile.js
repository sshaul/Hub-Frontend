import React, {Component} from 'react';

import ProfileImg from '../icons/profile-image.png';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <img src={ProfileImg} />
            </div>
        );
    }
}

export default Profile;