import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="input-group mb-2">
            <!-- search field and cog -->
                <input class="form-control rounded-pill ps-5" type="text" placeholder="Search Twitter">
                <i class="fa fa-search mt-2 ms-3 pt-1 position-absolute"></i>
                <a href="explore-settings.html">
                    <i class="fa fa-cog fa-2x text-primary ms-3 ms-lg-4 mt-1"></i>
                </a>
           </div>
           <ul class="nav nav-tabs mb-2">
           <!-- tabs -->
               <li class="nav-item">
                   <a class="nav-link active" href="for-you.html">For you</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="trending.html">Trending</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="news.html">News</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="sports.html">Sports</a>
               </li>
               <li class="nav-item d-none d-md-block">
                   <a class="nav-link" href="entertainment.html">Entertainment</a>
               </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative center pt-2">
                   <img class="wd-content-image" src="../../images/starship.webp">
                   <p class="wd-text-bottomleft fw-bold mb-1">SpaceX's Starship</p>
               </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
