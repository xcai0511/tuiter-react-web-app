const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item">
            <img class="float-end wd-logo-big ms-5" src=${post.image}>
            <div class="float-start text-muted">${post.topic}</div><br/>
            <div class="float-start fw-bold">${post.userName}</div>
            <i class="fa fa-check-circle ps-1"></i>
            <dic class="text-muted d-inline"> - ${post.time}</dic><br/>
            <span class="fw-bold">${post.title}</span>
        </div>
    `);
}

export default PostSummaryItem;