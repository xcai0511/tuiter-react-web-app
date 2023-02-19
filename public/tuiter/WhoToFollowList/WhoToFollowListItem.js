
const WhoToFollowListItem = (who) => {

    return(`
        <div class="list-group-item pb-0">
            <img class="rounded-circle float-start me-xl-2" height="40px" width="40px" src=${who.avatarIcon}>
            <button type="button" class="btn btn-primary rounded-pill float-end">
                Follow
            </button>
            <div>
                <div class="fw-bold d-inline">${who.userName}</div>
                <i class="fa fa-check-circle"></i><br>
                <div>@${who.handle}</div>
            </div>
        </div>
    `);


}
export default WhoToFollowListItem;