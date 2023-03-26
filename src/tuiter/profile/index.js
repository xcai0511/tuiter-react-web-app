import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css"

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile[0]);
    return (
        <div className="border">
            <div className="row">
                <Link to="/tuiter" className="col-1 d-inline link-dark -bold mt-2 ms-4">
                    <h3 className="bi bi-arrow-left-circle"></h3>
                </Link>
                <div className="col-10 ms-1 ms-xs-3">
                    <div className="fw-bold mb-0 wd-text-big">{profile.firstName} {profile.lastName}</div>
                    <div className="text-muted mt-0 wd-text-small">{profile.tuitsCount} Tuits</div>
                </div>
            </div>
            <div className="mt-1 mb-0">
                <img src={`/images/${profile.bannerPicture}`} width="100%" height="150px"/>
                <img src={`/images/${profile.profilePicture}`} width="120px" height="120px"
                     className="rounded-circle position-relative ms-3 translate-middle-y"/>
                <button className="btn rounded-pill float-end border mt-2 me-3">
                    <Link to="/tuiter/edit-profile" className="text-decoration-none link-dark fw-bold">
                        Edit profile
                    </Link>
                </button>
            </div>
            <div className="ms-3 me-3 wd-negative-margin mb-3">
                <div className="fw-bold wd-text-big">{profile.firstName} {profile.lastName}</div>
                <div className="text-muted mt-0">{profile.handle}</div>
                <div className="mt-2">{profile.bio}</div>
                <div className="text-muted mt-2">
                    <i className="bi bi-geo-alt"></i>
                    <div className="d-inline ms-1">{profile.location}</div>
                    <i className="bi bi-balloon ms-2 d-inline"></i>
                    <div className="d-inline ms-1">Born {profile.dateOfBirth}</div>
                    <i className="bi bi-calendar3 d-inline ms-2"></i>
                    <div className="d-inline ms-1">Joined {profile.dateJoined}</div>
                </div>
                <div className="text-muted mt-2">
                    <div className="fw-bold text-black d-inline">{profile.followingCount}</div>
                    <div className="d-inline ms-1">Following</div>
                    <div className="fw-bold text-black d-inline ms-5">{profile.followersCount}</div>
                    <div className="d-inline ms-1">Followers</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;