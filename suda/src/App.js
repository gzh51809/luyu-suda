import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TabBar } from 'antd-mobile';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Home from './pages/home.js' ;
import Gife from './pages/gife.js' ;
import Cart from './pages/cart.js' ;
import My from './pages/my.js' ;
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: true,
  }
}//初始化部分
  // renderContent(pageText) {
  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //       <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
  //       <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           this.setState({
  //             hidden: !this.state.hidden,
  //           });
  //         }}
  //       >
  //         Click to show/hide tab-bar
  //       </a>
  //       <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           this.setState({
  //             fullScreen: !this.state.fullScreen,
  //           });
  //         }}
  //       >
  //         Click to switch fullscreen
  //       </a>
  //     </div>
  //   );
  // }
  
  render() {//视图层，用来写样式结构
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/gife" component={Gife} />
          <Route path="/cart" component={Cart} />
          <Route path="/my" component={My} />
          <Redirect to="/home"/>
        </Switch> 
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom: 0 , zIndex:8888} : {height:650 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'redTab'}
            // badge={'new'}
            onPress={() => {
              this.props.history.push({pathname: '/home'})
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="企业福利"
            key="企业福利"
            // badge={'1'}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.props.history.push({pathname: '/gife'})
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="购物车"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.props.history.push({pathname: '/cart'})
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.props.history.push({pathname: '/my'})
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
      </div>
      </div>

  

  )
}
}


App = withRouter(App);
export default App;
