import React from "react";
import "./index.css";

const HomePostItem = ({post}) => {
    return (
        <div className="border-bottom border-muted">
            <div className="row ms-1 mt-2 mb-2 me-2">
                <div className="col-1">
                    <img src={`/images/${post.image}`} className="wd-round-icon"/>
                </div>
                <div className="col-11">
                    <div className="ms-4">
                        <div className="d-inline fw-bold">{post.userName} </div>
                        <i className="d-inline text-primary bi bi-check-circle-fill"></i>
                        <div className="d-inline text-secondary"> @{post.userHandle} · {post.time}</div>
                        <i className="d-inline bi bi-three-dots float-end"></i>
                        <div>
                            {post.tuit}
                        </div>
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
                                <div className="col-3">
                                    <i className="bi bi-heart-fill me-2 wd-color-red"></i>
                                    <small className="d-inline wd-color-red"> {post.likes}</small>
                                </div>
                                ) :
                                (
                                    <div className="col-3">
                                        <i className="bi bi-heart me-2 "></i>
                                        <small className="d-inline "> {post.likes}</small>
                                    </div>
                                )
                            }
                            <div className="col-3">
                                <i className="bi bi-share"></i>
                            </div>
                        </div>
                        {post.showThisThread ? (
                            <a className="text-decoration-none mt-2">Show this thread</a>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePostItem;