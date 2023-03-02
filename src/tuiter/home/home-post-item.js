import React from "react";
import "./index.css";

const HomePostItem = ({post}) => {
    return (
        <div className="border-bottom border-muted">
            <div className="row ms-1 mt-2 mb-2 me-2">
                {post.retuited ? (
                    <small className="fw-bold text-muted ms-4">
                        <i className="bi bi-arrow-repeat me-2"></i>
                        {post.retuited} Retuited
                    </small>) : null
                }
                <div className="col-1">
                    <img src={`/images/${post.avatarIcon}`} className="wd-round-icon"/>
                </div>
                <div className="col-11">
                    <div className="ms-4">
                        <div className="d-inline fw-bold">{post.userName} </div>
                        <i className="d-inline text-primary bi bi-check-circle-fill"></i>
                        <div className="d-inline text-secondary"> @{post.userHandle} · {post.time}</div>
                        <i className="d-inline bi bi-three-dots float-end"></i>
                        <div>
                            {post.postContent}
                            <a href={post.href} className="text-decoration-none">{post.hrefText}</a>
                        </div>
                        {post.postImage ? (
                            <div className="card mb-2 mt-2 border border-light bg-transparent rounded-4">
                                <div className="border-bottom border-light">
                                    <img className="card-img-top rounded-4" src={`/images/${post.postImage}`}/>
                                </div>
                            </div>) : null
                        }
                        {post.retuitPost ? (
                            <div className="card rounded-4">
                                <div className="m-2">
                                    <img src={`/images/${post.retuitPost.avatarIcon}`} className="d-inline wd-round-icon-small"/>
                                    <div className="d-inline fw-bold"> {post.retuitPost.userName} </div>
                                    <i className="d-inline text-primary bi bi-check-circle-fill"></i>
                                    <div className="d-inline text-secondary"> @{post.retuitPost.userHandle} · {post.retuitPost.time}</div>
                                    <div className="card-text">{post.retuitPost.postContent}</div>
                                </div>

                            </div>
                            ) : null
                        }
                        <div className="row text-muted mt-2 mb-2">
                            <div className="col-3">
                                <i className="bi bi-chat me-2"></i>
                                <small className="d-inline"> {post.numComments}</small>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-arrow-repeat me-2"></i>
                                <small className="d-inline"> {post.numRetuits}</small>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-heart me-2"></i>
                                <small className="d-inline"> {post.numLikes}</small>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-upload"></i>
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