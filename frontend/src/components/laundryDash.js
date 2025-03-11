import { useState } from "react";
//import { Home, List, Plus, Sidebar } from "lucide-react";

// import styles from "./styles/Dashboard.module.css";
import styles from '../styles/Dashboard.module.css'
import { useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Sidebar from "./Sidebar";
import { BsSearch } from 'react-icons/bs';

export default function LaundryDashboard() {
  const [orders] = useState([]);
  const navigate = useNavigate();

  const goToOrder = ()=>{
    navigate('/order')
  }

  return (
    <>
      <Layout>
        <Sidebar/>
        <div className="container">
                              <div className="info-text">
                                  <p>Orders | {orders.length}</p>
                              </div>
                              <div className="searchbox">
                                  <div className="search-icon">
                                  <BsSearch/>
                                  </div>
                                  <div className="search-text">
                                      <input type="text" name="search-text"/>           
                                  </div>
                              </div>
                          </div>
        <div className={styles.container} style={{height:"100vh"}}>
        <div className={styles.mainContent}>
          <div className={styles.ordersSection}>
            
            {orders.length === 0 ? (
              <div className={styles.noOrders}>
                <p>No Orders available</p>
                <button className={styles.createButton} onClick={goToOrder}>Create</button>
              </div>
            ) : (
              <div>{}</div>
            )}
          </div>
        
        </div>
      </div>
      </Layout>
    </>
    
  );
}



