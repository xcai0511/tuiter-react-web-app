import React from "react";
import {useDispatch} from "react-redux";
import {updateLikes} from "./tuits-reducer";
const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const likeUpdate = () => {
        dispatch(updateLikes(post))
    };
    return (
        <div className="row text-muted mt-2 mb-2">
            <div className="col-3">
                <i className="bi bi-chat me-2"></i>
                <small className="d-inline"> {post.replies}</small>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat me-2"></i>
                <small className="d-inline"> {post.retuits}</small>
            </div>
            {post.liked ? (
                    <div className="col-3" onClick={likeUpdate}>
                        <i className="bi bi-heart-fill me-2 wd-color-red"></i>
                        <small className="d-inline wd-color-red"> {post.likes}</small>
                    </div>
                ) :
                (
                    <div className="col-3" onClick={likeUpdate}>
                        <i className="bi bi-heart me-2 "></i>
                        <small className="d-inline "> {post.likes}</small>
                    </div>
                )
            }
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;