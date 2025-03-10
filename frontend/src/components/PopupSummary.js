import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useUser } from '../context/user';
import PopupCancelOrder from "./PopupCancelOrder";

const PopupSummary = (props) => {
  const [user, setUser] = useUser();
  return (
    
    <Popup 
        trigger={<button className="view-btn">
          <img className="view-icon" src='/images/view.png' alt='view'/>
        </button>
        } 
        position={"left center"}
        popupClassName="summary-popup" 
    >
        {
        close => (
        <div className='summary-container'>
            <div className='summary-header'>
                <p className='summary-text'>Summary</p>
                <button className="close-btn" onClick={()=>close()}>X</button>
            </div>
            <div className='summary-body'>
                <div className='store-details'>
                    <div className='store-location store-item'>
                        <p className='store-item-header'>Store Location</p>
                        <p className='store-item-text'>{props.order.store_location}</p>
                    </div>
                    <div className='store-address store-item'>
                        <p className='store-item-header'>Store Address:</p>
                        <p className='store-item-text'>Near Phone booth, 10th road,</p>
                    </div>
                    <div className='store-phone store-item'>
                        <p className='store-item-header'>Phone</p>
                        <p className='store-item-text'>{props.order.store_phone}</p>                 
                    </div>  
                </div>
                <div className='order-status'>
                  {
                    props.order.status === "Ready to Pickup" ? (
                      <>
                        <input type='radio' name='Picked up' checked="checked" onChange={() => {return false}}/>Picked up
                        <input type='radio' name='Washed' disabled/>Washed
                        <input type='radio' name='Ironed' disabled/>Ironed
                        <input type='radio' name='Delivered' disabled/>Delivered
                      </>
                    ) : (
                      <>
                        {
                          props.order.status === "In Washing" ? (
                            <>
                              <input type='radio' name='Picked up' checked="checked" onChange={() => {return false}}/>Picked up
                              <input type='radio' name='Washed' checked="checked" onChange={() => {return false}}/>Washed
                              <input type='radio' name='Ironed' disabled/>Ironed
                              <input type='radio' name='Delivered' disabled/>Delivered
                            </>
                          ) : (
                            <>
                              {
                                props.order.status === "In Ironing" ? (
                                  <>
                                    <input type='radio' name='Picked up' checked="checked" onChange={() => {return false}}/>Picked up
                                    <input type='radio' name='Washed' checked="checked" onChange={() => {return false}}/>Washed
                                    <input type='radio' name='Ironed' checked="checked" onChange={() => {return false}}/>Ironed
                                    <input type='radio' name='Delivered' disabled/>Delivered
                                  </>
                                ) : (
                                  <>
                                    {
                                      props.order.status === "Ready to deliver" ? (
                                        <>
                                          <input type='radio' name='Picked up' checked="checked" onChange={() => {return false}}/>Picked up
                                          <input type='radio' name='Washed' checked="checked" onChange={() => {return false}}/>Washed
                                          <input type='radio' name='Ironed' checked="checked" onChange={() => {return false}}/>Ironed
                                          <input type='radio' name='Delivered' checked="checked" onChange={() => {return false}}/>Delivered
                                        </>
                                      ) : (
                                        <>
                                            <input type='radio' name='Picked up' disabled/>Picked up
                                            <input type='radio' name='Washed' disabled/>Washed
                                            <input type='radio' name='Ironed' disabled/>Ironed
                                            <input type='radio' name='Delivered' disabled/>Delivered
                                        </>
                                      )
                                    }
                                  </>
                                )
                              }
                            </>
                          )
                        }
                      </>
                    )
                  }
                </div>
                <div className='order-details' style={{marginLeft: "2vw"}}>
                  <p>Order Details</p>
                  <table >
                    <tbody>
                        <tr>
                              <td className='table-item'>{props.order.product_type}</td>
                              <td className='table-item'>{props.order.wash_type}</td>
                              <td className='table-item'>{props.order.price}</td>
                          </tr>
                          <tr>
                              <td className='table-item'></td>
                              <td className='table-item'></td>
                              <td className='table-item'>Sub total: {props.order.price}</td>
                          </tr>
                          <tr>
                              <td className='table-item'></td>
                              <td className='table-item'></td>
                              <td className='table-item'>Pickup Charges: {90}</td>
                          </tr>
                          <tr className='custom-row'>
                              <td className='table-item'></td>
                              <td className='table-item'></td>
                              <td className='table-item'>Total: {props.order.price + 90}</td>
                          </tr>
                    </tbody>
                  </table>
                </div>
                <div className='address'>
                  <p>Address</p>
                  <div className='address-box'>
                    <p>Home</p>
                    <p>{user.currUser.address}</p>
                  </div>
                </div>
                <div className='cancel-action'>
                  {console.log("Order in parent component:", props.order)}
                  <PopupCancelOrder order = {props.order} styleClass = {"cancel-btn-summary"} />
                </div>
            </div>
        </div>
        )
        }
    </Popup>
  )
}

export default PopupSummary
