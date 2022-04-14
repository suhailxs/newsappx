import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { render } from "react-dom";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  pageSize = 20;
  suhail = "suhail";
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar active=""/>
          {/* <News apiKey = {this.apiKey} pageSize={this.pageSize} country="in" category="science" /> */}
          <Routes>
            <Route exact path="/" element={<News apiKey = {this.apiKey}  key="home" pageSize={this.pageSize} country="in" category="general" />}/>
            <Route path="/business" element={<News apiKey = {this.apiKey} active="active"  key="business" pageSize={this.pageSize} country="in" category="business" />}/>
            <Route exact path="/entertainment" element={<News apiKey = {this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}/>
            <Route exact path="/general" element={<News apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}/>
            <Route exact path="/health" element={<News apiKey = {this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}/>
            <Route exact path="/science" element={<News apiKey = {this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}/>
            <Route exact path="/sports" element={<News apiKey = {this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News apiKey = {this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
