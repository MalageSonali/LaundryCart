import React from 'react'
import Popup from 'reactjs-popup';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PopupCancelOrder = (props) => {
    
    const navigate = useNavigate();

    const deleteOrder = async (id) => {

        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/orders/delete/${id}`);
        console.log("Response while deleting order: ", res);
        
        if(res.data.success){
            toast.success(res.data.message);
            navigate(0);
        }else{
            toast.error(res.data.message);
            navigate(0);
        }
    }

  return (
    <div>
      <Popup trigger={<button className="cancel-btn">Cancel Order</button>} modal nested >
        {
            close => (
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="close-text">Alert</p>
                        <button className="close-btn" onClick={()=>close()}>X</button>
                    </div>
                    <div className="modal-body">
                        <img className="warning-icon" src='/images/warning.png' />
                        
                        <div className="warning-text">
                            <p>Are you sure want to cancel the oreder No: {props.order.order_id}</p>
                            <button className="proceed-btn" onClick={() =>{ deleteOrder(props.order._id); close()}}>Proceed</button>
                        </div>
                    </div>
                </div>
            )
        }
    </Popup>
    </div>
  )
}

export default PopupCancelOrder
