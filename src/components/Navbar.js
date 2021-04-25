import React, {useState} from 'react';
import '../App.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return(
        <div className="Navbar">
        <div className="leftSide">
            <div className="links" id={showLinks ? "hidden": ""}>
                <a href="/home">Home</a>
            </div>
            <button className="reorderIcon" onClick={() => setShowLinks(!showLinks)}>
                {" "}
                <ReorderIcon />
            </button>
        </div>
        <div className="rightSide">
            <SearchIcon className="searchIcon"/>
            <input type="text" placeholder="Search"/>
        </div>
    </div>  
    );
}

export default Navbar;