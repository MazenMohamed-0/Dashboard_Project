import React from 'react';
import "../styles/EditPage.css";

const EditPage = ()=>{

    <div class="edit-profile-container">
    
    <div class="profile-content">
    
      <div className="photo-name-section">
        <div className="image-name">
            <img src="img3.jpg" alt="User" className="profile-photo" />
            <h2 className="user-name">John Doe</h2>
        </div>
      
        <div className="name-change-section">
          
          <label className="change-photo-btn">
            Change Photo
            <input type="file" id="change-photo" accept="image/*"/>
          </label>
        </div>
      </div>

      // Edit Profile Form 
      <form className="edit-profile-form">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" placeholder="Write a short bio" rows="4"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="account-type">Account Type</label>
          <select id="account-type">
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter your address" />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  </div>

};

export default EditPage;