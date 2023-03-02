import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home/" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill pe-2"></i>
                <div className="d-none d-xl-inline-block">Home</div>
            </Link>
            <Link to="/tuiter/explore/" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash pe-2"></i>
                <div className="d-none d-xl-inline-block">Explore</div>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-pencil-square pe-2"></i>
                <div className="d-none d-xl-inline-block">Labs</div>
            </Link>
            <Link to="/tuiter/notifications/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill pe-2"></i>
                <div className="d-none d-xl-inline-block">Notifications</div>
            </Link>
            <Link to="/tuiter/messages/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill pe-2"></i>
                <div className="d-none d-xl-inline-block">Messages</div>
            </Link>
            <Link to="/tuiter/bookmarks/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill pe-2"></i>
                <div className="d-none d-xl-inline-block">Bookmarks</div>
            </Link>
            <Link to="/tuiter/lists/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul pe-2"></i>
                <div className="d-none d-xl-inline-block">Lists</div>
            </Link>
            <Link to="/tuiter/profile/" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill pe-2"></i>
                <div className="d-none d-xl-inline-block">Profile</div>
            </Link>
            <Link to="/tuiter/more/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots pe-2"></i>
                <div className="d-none d-xl-inline-block">More</div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;