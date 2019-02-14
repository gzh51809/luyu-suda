import React, { Component } from 'react';
import '../sass/home.scss';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Home extends Component {
      componentDidMount() {
        this.autoFocusInst.focus();
      }      
    render() {
      return (
        <div className="Home">
          <div className='head'>
      <SearchBar placeholder="搜索" ref={ref => this.autoFocusInst = ref} onChange={this.onChange}/>
      <WhiteSpace />
          </div>
          <div className='navtabber'>111</div>
        </div>
      );
    }
  }
  
  
  
  export default Home;