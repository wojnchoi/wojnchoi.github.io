import Header from "./components/Header"
import Project from "./components/Project"
import About from "./components/About"
import Slider from './components/Slider'

import React from 'react'
import ScrollSnap from 'scroll-snap'
import './App.css'

function callback() {
  console.log('snapped')
}

class App extends React.Component {
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '90%',
    })

    snapElement.bind(callback)
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div id="container" ref={this.container}>
         <Header/>
          <Slider/>
        <div className="page first-page">
          <h1 style={{textAlign: "center"}}>printf(<a style={{color: "blue"}}>Hello World</a>\n);</h1>
        </div>
        <div className="page second-page">
          <Project className1="page first-page"className2="hint"/>
        </div>
        <div className="page third-page">
        <About className="page second-page"/>
        </div>
      </div>
    )
  }
}
export default App