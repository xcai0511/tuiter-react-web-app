import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
const TuitList = () => {
    const tuitsArray = useSelector((state) => state.tuits);
    return(
        <ul className="list-group mb-2 border border-muted">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;