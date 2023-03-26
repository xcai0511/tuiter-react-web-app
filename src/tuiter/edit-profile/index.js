import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../profile/profile-reducer";
import "./index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const EditProfileComponent = () => {
    let profileItem = useSelector(state => state.profile[0]);
    let [firstName, setFirstName] = useState(profileItem.firstName);
    let [lastName, setLastName] = useState(profileItem.lastName);
    let [bio, setBio] = useState(profileItem.bio);
    let [location, setLocation] = useState(profileItem.location);
    let [website, setWebsite] = useState(profileItem.website);
    let [dob, setDob] = useState(new Date(profileItem.dateOfBirth));
    let [bannerPicture, setBannerPicture] = useState(profileItem.bannerPicture);
    let [profilePicture, setProfilePicture] = useState(profileItem.profilePicture);
    let [fullName, setFullName] = useState(firstName + " " + lastName);
    const dispatch = useDispatch();
    const saveOnClickHandler = () => {
        const nameArray = fullName.split(" ");
        firstName = nameArray[0];
        lastName = nameArray[1];
        profileItem = {
            ...profileItem,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dob
        }
        dispatch(editProfile(profileItem));
    }
    const nameChangeHandler = (event) => {
        const newName = event.target.value;
        setFullName(newName);
    }
    const bioChangeHandler = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
    }
    const locationChangeHandler = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    }
    const websiteChangeHandler = (event) => {
        const newWebsite = event.target.value;
        setWebsite(newWebsite);
    }
    const editOnClickHandler = () => {
        return (
            <label>
                <DatePicker id="datepicker" selected={dob} onChange={(dob) => setDob(dob)}/>
            </label>
        );
    }

    return (
        <div>
            <div className="row">
                <Link to="/tuiter/profile" className="col-1 d-inline link-dark -bold mt-2 ms-4">
                    <i className="bi bi-x-lg"></i>
                </Link>
                <div className="col-10 ms-1 ms-xs-3 mt-1 fw-bold mb-0 wd-text-big">
                    <div className="fw-bold mb-0 wd-text-big d-inline">Edit Profile</div>
                    <button className="btn btn-dark rounded-pill float-end me-1 ps-3 pe-3 pt-1 pd-1" onClick={saveOnClickHandler}>
                        <Link to="/tuiter/profile" className="text-decoration-none link-light">Save</Link>
                    </button>
                </div>
            </div>
            <div>
                <div className="mt-2 mb-0 position-relative">
                    <img src={`/images/${bannerPicture}`} width="100%" height="150px" className="wd-gray"/>
                    <div className="position-absolute wd-center">
                        <button className="btn btn-secondary rounded-circle">
                            <i className="bi bi-camera"></i>
                        </button>
                        <button className="btn btn-secondary rounded-circle ms-3">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
                <div className="position-absolute">
                    <img src={`/images/${profilePicture}`} width="100px" height="100px"
                         className="rounded-circle position-relative ms-3 translate-middle-y wd-gray"/>
                    <div className="position-absolute wd-center wd-move-up ms-2 opacity-75">
                        <button className="btn btn-secondary rounded-circle">
                            <i className="bi bi-camera"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5 wd-move-down position-relative">
                <form className="form-floating">
                    <input type="text" className="form-control" id="nameInput" value={fullName} onChange={nameChangeHandler}/>
                    <label htmlFor="nameInput">Name</label>
                </form>
                <form className="form-floating mt-3">
                    <input name="textarea" className="form-control" id="bioInput" value={bio} onChange={bioChangeHandler}></input>
                    <label htmlFor="bioInput">Bio</label>
                </form>
                <form className="form-floating mt-3">
                    <input type="text" className="form-control" id="locationInput" value={location} onChange={locationChangeHandler}/>
                    <label htmlFor="locationInput">Location</label>
                </form>
                <form className="form-floating mt-3">
                    <input type="text" className="form-control" id="websiteInput" value={website} onChange={websiteChangeHandler}/>
                    <label htmlFor="websiteInput">Website</label>
                </form>
                <div className="mt-3">
                    <small className="text-muted">Birth date · </small>
                    <small className="text-primary" onClick={editOnClickHandler}>Edit</small>
                    <br/>
                    <label>
                        <DatePicker id="datepicker" selected={dob} onChange={(dob) => setDob(dob)}/>
                    </label>
                </div>
                <div className="mt-3">
                    <div className="d-inline">Switch to professional</div>
                    <a className="d-inline float-end bi bi-chevron-right"></a>
                </div>

            </div>


        </div>

    );
}

export default EditProfileComponent;