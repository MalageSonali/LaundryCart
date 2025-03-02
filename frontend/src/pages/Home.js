import React from 'react'
import Layout from '../components/layout/Layout'
import { useUser } from '../context/user'
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';

function Home() {
  const [user, setUser] = useUser();
  return (
    <>
        <Layout title={"Home - Laundry Cart"}>
          <Sidebar/>
            <div style={{height: "100vh", color: "#5861AE"}}>
            {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
            <Welcome/>
            </div>
        </Layout> 
    </>
  )
}

export default Home
