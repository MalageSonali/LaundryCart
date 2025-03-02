import React, {useState, useEffect} from "react";
import '../styles/OrderDetails.css';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function OrdersDetails(){
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API}/api/v1/orders`)
          .then((response) => {
            console.log("API Response:", response.data.data);
            setOrders(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching orders:", error);
            toast.error("Error fetching orders");
          });
      }, []);

      const goToSummary = () => {
        navigate('/summary');
      }
    return(
        <>
            <div className="table-container">
                <table>
                    <thead>
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
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.order_id}>
                                <td className="table-item">{order.order_id}</td>
                                <td className="table-item">{new Date(order.order_date_time).toLocaleString()}</td>
                                <td className="table-item">{order.store_location}</td>
                                <td className="table-item">{order.city}</td>
                                <td className="table-item">{order.store_phone}</td>
                                <td className="table-item">{"Total Items"}</td>
                                <td className="table-item" style={{color: "#5861AE"}}>{order.price}</td>
                                <td className="table-item">{order.status}</td>
                                <td className="table-item action">{"Cancel Order"}</td>
                                <td className="table-item" onClick={goToSummary}>
                                    {"view"}
                                    <div className="view-icon">
                                        
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>  
                </table>                
            </div>
        </>
    );
}

export default OrdersDetails;