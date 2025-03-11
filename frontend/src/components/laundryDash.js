import { useState } from "react";
//import { Home, List, Plus, Sidebar } from "lucide-react";

import styles from "./styles/Dashboard.module.css";
import { useNavigate } from "react-router-dom";


export default function LaundryDashboard() {
  const [orders] = useState([]);
  const navigate = useNavigate();

  const goToOrder = ()=>{
    navigate('/order')
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.ordersSection}>
          <h2>Orders | {orders.length}</h2>
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
  );
}



