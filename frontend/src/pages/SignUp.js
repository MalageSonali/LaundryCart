import React from 'react'
import Layout from '../components/layout/Layout'
import SplitScreen from '../components/SplitScreen'
import Welcome from '../components/Welcome'
import CtaLogin from '../components/CtaLogin'
import SignupForm from '../components/SignupForm'

function SignUp() {
  return (
    <Layout>
      <SplitScreen leftWidth={1} rightWidth={3}>
          <Welcome>
              <CtaLogin/>
          </Welcome>
          <SignupForm/>
      </SplitScreen>
    </Layout>
  )
}

export default SignUp
