import React from "react";
import './OrderDetails.css';

function OrdersDetails(){
    return(
        <>
            <div className="table-container">
                <table>
                    <tr>
                        <th><p>Order id</p></th>
                        <th><p>Order Date & Time</p></th>
                        <th><p>Store Location</p></th>
                        <th><p>City</p></th>
                        <th><p>Store Phone</p></th>
                        <th><p>Total Items</p></th>
                        <th><p>Price</p></th>
                        <th><p>Status</p></th>
                        <th><p></p></th>
                        <th><p>View</p></th>
                    </tr> 
                    <tr>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                    </tr>
                    <tr>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                    </tr>   
                </table>                
            </div>
        </>
    );
}

export default OrdersDetails;