import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginEmailScreen from './screens/LoginEmailScreen'
import JoinMembershipScreen from './screens/JoinMembershipScreen'

const App = () => {
  return (
    <Router>
      <main>
          <Route path='/login' component={LoginEmailScreen} exact />
          <Route path='/join/email' component={JoinMembershipScreen} exact />
          <Route path='/home' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App