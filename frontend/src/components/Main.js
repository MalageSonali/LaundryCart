import React from "react";
import Activitybar from './Activitybar';
import OrdersDetails from "./OrderDetails";
import Sidebar from './Sidebar';

function Main(){
    return(
        <>
            <div style={{minHeight: "75vh"}}>
                <Sidebar/>
                <Activitybar/>
                <OrdersDetails/>
            </div>
        </>
    );
}

export default Main;