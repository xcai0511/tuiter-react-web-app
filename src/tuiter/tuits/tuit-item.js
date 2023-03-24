import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <div className="border-bottom border-muted">
            <div className="row ms-1 mt-2 mb-2 me-2">
                <div className="col-1">
                    <img src={`/images/${post.image}`} className="wd-round-icon"/>
                </div>
                <div className="col-11">
                    <div className="ms-4">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        <div className="d-inline fw-bold">{post.userName} </div>
                        <i className="d-inline text-primary bi bi-check-circle-fill"></i>
                        <div className="d-inline text-secondary"> @{post.userHandle} · {post.time}</div>
                        <div>{post.tuit}</div>
                        <TuitStats
                            key={post.id}
                            post={post}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;