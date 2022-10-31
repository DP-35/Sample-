import './App.css';
// My API Key : 04c0ec32f0fa4f939ff406c14abad4b1
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route exact path="/about" element={<About />}/> */}
            <Route exact path="/" element={<News key='home' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='science' />} />
            <Route exact path="/science" element={<News key='science' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='science' />} />
            <Route exact path="/business" element={<News key='business' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='business' />} />
            <Route exact path="/sports" element={<News key='sports' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='sports' />} />
            <Route exact path="/health" element={<News key='health' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='health' />} />
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='entertainment' />} />
            <Route exact path="/technology" element={<News key='technology' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='technology' />} />
            <Route exact path="/general" element={<News key='general' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='general' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App

