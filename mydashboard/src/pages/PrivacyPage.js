import React from 'react';
import UserSidebar from '../components/UserSidebar'; // Adjust the path as necessary
import '../styles/PrivacyPage.css'; // Ensure this file exists in src/styles

const PrivacyPage = () => {
    return (
        <div className="privacy-page">
     
            <div className="privacy-content">
                <h1>Account Privacy</h1>
                <p>
                    PRIVATE ACCOUNT<br />
                    WHEN YOUR ACCOUNT IS PUBLIC, YOUR PROFILE AND POSTS CAN BE SEEN BY ANYONE,
                    ON OR OFF INSTAGRAM, EVEN IF THEY DON’T HAVE AN INSTAGRAM ACCOUNT.
                </p>
                <p>
                    WHEN YOUR ACCOUNT IS PRIVATE, ONLY THE FOLLOWERS YOU APPROVE CAN SEE
                    WHAT YOU SHARE, INCLUDING YOUR PHOTOS ON YOUR PROFILE AND LOCATION
                    PAGES, AND YOUR FOLLOWERS AND FOLLOWING LISTS. CERTAIN INFO ON YOUR
                    PROFILE, LIKE YOUR PROFILE PICTURE AND USERNAME, IS VISIBLE TO EVERYONE ON
                    AND OFF INSTAGRAM.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPage;
