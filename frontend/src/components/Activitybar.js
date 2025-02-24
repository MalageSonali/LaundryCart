import React from "react";
import './Activitybar.css';

function Activitybar(){
    return(
        <>
            <div className="container">
                <div className="info-text">
                    <p>Orders | 0</p>
                </div>
                <div className="create-button">
                    <button>Create</button>
                </div>
                <div className="searchbox">
                    <div className="search-icon">

                    </div>
                    <div className="search-text">
                        <input type="text" name="search-text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Activitybar;