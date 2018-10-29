import * as React from 'react'

import { TextGlobalStyle } from 'styles/text'

import Homescreen from './Homescreen'

class App extends React.Component {

  render() {
    return <>
      <TextGlobalStyle />
      <Homescreen />
    </>
  }
  
}

export default App
