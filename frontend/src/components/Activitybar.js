import React from "react";
import '../styles/Activitybar.css';
import { useNavigate } from "react-router-dom";

function Activitybar(){
    const navigate = useNavigate();
    const goToOrders = () => {
        navigate('/orders');
    }
    return(
        <>
            <div className="container">
                <div className="info-text">
                    <p>Orders | 0</p>
                </div>
                <div className="create-button">
                    <button onClick={goToOrders}>Create</button>
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