import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile[0]);
    return (
        <>
            <div className="row">
                <Link to="/tuiter" className="d-inline link-dark -bold">
                    <i className="bi bi-arrow-left"></i>
                </Link>
                <div className="d-inline ms-3">
                    <div className="fw-bold text-primary">{profile.firstName}</div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;