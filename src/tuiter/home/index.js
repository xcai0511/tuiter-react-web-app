import React from "react";
import HomePostItem from './home-post-item';
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/tuit-list";
const HomeComponent = () => {
    const homePostsArray = useSelector(state => state.tuits)
    return(
        <div>
            <h1>Home</h1>
            <WhatsHappening></WhatsHappening>
            <TuitList/>
        </div>

    );
};

export default HomeComponent;