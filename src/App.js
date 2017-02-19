import React, { Component } from 'react'
import { connect } from 'react-redux'

//import './style.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        This is the app
      </div>
    )
  }
}

export default connect()(App)
