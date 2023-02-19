const PostItem = (post) => {
    if (post.postTitle) {
        return (`
            <div class="mt-2 me-3">
                <div class="row">
                    <div class="col-1">
                        <img src=${post.userImage} class="wd-avatar-image">
                    </div>
                    <div class="col-11">
                        <div class="ms-5 ms-md-4">
                            <div class="d-inline fw-bold text-white">${post.userName}</div>
                            <i class="d-inline fa fa-check-circle text-white"></i>
                            <div class="d-inline text-muted">@${post.handle} · ${post.time}</div>
                            <i class="d-inline fa fa-ellipsis-h float-end"></i>
                            <div class="text-white">${post.description}</div>
                        </div>
                        <div class="card mb-2 mt-2 ms-5 ms-md-4 border border-light bg-transparent rounded-4" style="width: 100%">
                            <div class="border-bottom border-light">
                                <img class="card-img-top rounded-4" src="${post.postImage}">
                            </div>
                            <div class="card-body">
                                <div class="card-title text-white">${post.postTitle}</div>
                                <div class="card-text">
                                    <span>${post.postContent}</span>
                                    <div><i class="fa fa-link"></i> ${post.postLink}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row ms-5 ms-md-4 row text-muted">
                            <div class="col-3">
                                <i class="fa fa-comment me-2"></i>
                                <p class="d-inline">${post.commentNum}</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-retweet me-2"></i>
                                <p class="d-inline">${post.retweetNum}</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-heart-o me-2"></i>
                                <p class="d-inline">${post.likeNum}</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-paper-plane"></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
         
        `);
    } else {
        return (`
            <div class="mt-2 me-3">
                <div class="row">
                    <div class="col-1">
                        <img src=${post.userImage} class="wd-avatar-image">
                    </div>
                    <div class="col-11">
                        <div class="ms-5 ms-md-4">
                            <div class="d-inline fw-bold text-white">${post.userName}</div>
                            <i class="d-inline fa fa-check-circle text-white"></i>
                            <div class="d-inline text-muted">@${post.handle} · ${post.time}</div>
                            <i class="d-inline fa fa-ellipsis-h float-end"></i>
                            <div class="text-white">${post.description}</div>
                        </div>
                        <div class="card mb-2 mt-2 ms-5 ms-md-4 border border-light rounded-4 bg-transparent" style="width: 100%">
                            <img class="card-img-top rounded-4" src="${post.postImage}">
                        </div>
                        
                        <div class="row ms-5 ms-md-4 row text-muted">
                            <div class="col-3">
                                <i class="fa fa-comment me-2"></i>
                                <p class="d-inline">${post.commentNum}</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-retweet me-2"></i>
                                <p class="d-inline">${post.retweetNum}</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-heart-o me-2"></i>
                                <p class="d-inline">${post.likeNum}</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-paper-plane"></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        `);
    }
}
export default PostItem;