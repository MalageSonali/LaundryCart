import React from 'react'
import Layout from '../components/layout/Layout'
import Welcome from '../components/Welcome'
import SplitScreen from '../components/SplitScreen'
import SigninForm from '../components/SigninForm'

function SignIn() {
  return (
    <Layout>
        <SplitScreen leftWidth={1} rightWidth={1}>
            <Welcome/>
            <SigninForm/>            
        </SplitScreen>
    </Layout>
  )
}

export default SignIn
