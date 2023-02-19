import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
       <!-- continue here -->
            <div class="list-group-item fw-bold">Who to Follow</div>
            ${
                who.map(who => {
                    return (WhoToFollowListItem(who));
                }).join('')
            }
       </ul>
`); }
export default WhoToFollowList;