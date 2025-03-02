import React from 'react'
import Layout from '../components/layout/Layout'
import Sidebar from '../components/Sidebar'
import Activitybar from '../components/Activitybar'

function Orders() {
  return (
    
        <Layout title={"Orders - Laundry Cart"}>
          <Sidebar/>
          <Activitybar/>
          <div style={{height:"91.2vh"}}></div>
        </Layout>
    
  )
}

export default Orders
