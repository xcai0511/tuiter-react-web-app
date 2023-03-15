import React from "react";
import HomePostItem from './home-post-item';
import {useSelector} from "react-redux";
const HomeComponent = () => {
    const homePostsArray = useSelector(state => state.tuits)
    return(
        <div>
            <h1>Home</h1>
            <ul className="list-group mb-2 border border-muted">
                {
                    homePostsArray.map(post =>
                        <HomePostItem
                            key={post._id} post={post}/> )
                }
            </ul>
        </div>

    );
};

export default HomeComponent;