import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group mb-2 border border-muted">
            {
                tuits.length === 0 &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        post={tuit}/>
                )
            }
        </ul>
    );
};
export default TuitList;