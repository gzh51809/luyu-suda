import React, { Component } from 'react';
import '../sass/gife.scss';
import axios from 'axios';
import { Carousel, WingBlank } from 'antd-mobile';
import data from '../data/pakage.json';

class Gife extends Component {
    constructor(){
        super();
        this.state={
            data: ['1', '2','3'],
            imgHeight: 176,
            banner:[],
            goods: []
        }
    }
    componentWillMount(){
        this.setState({
            goods: data
        },()=>{
            console.log(this.state.goods,11111111);
        })
        // axios.get('../data/pakage.json')
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            // data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            data: ['../img/1.png', '../img/2.png', '../img/3.png'],

          });
        }, 100);
      }
    render() {
      return (
        <div className="Gife">
          <div className='head'><span class="iconfont icon-home"></span>企业福利</div>
          <div className='lunbo'>
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' ,height:170}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>

    </div>
    <div className='banner'>
        <div className='left'><p style={{fontWeight:"bolder",left:'15%',top:10}}>热映大片</p><p style={{left:'15%',top:30}}>电影院走起</p><img src={'../img/banner1.png'}/></div>
        <div className='right'>
        <p style={{fontWeight:"bolder",left:'15%',top:10}}>西饼蛋糕</p><p style={{left:'15%',top:30}}>全球优质风味</p>
        <p style={{fontWeight:"bolder",left:'15%',top:130}}>提货券专区</p><p style={{left:'15%',top:150}}>优中选优</p>
        <div className='right1'><img src={'../img/banner2.png'}/></div>
        <div className='right2'><img src={'../img/banner3.png'}/></div></div>
    </div>
    <div className='list'>
 
         <ul>
        {
            this.state.goods.map((item,index)=>{
                return (
                    <li key={index}>
                        <img src={item.src} alt=""/>
                        <p style={{fontWeight:'bold'}}>{item.title}</p>
                        <p>{item.content}</p>

                    </li>
                )
            })
        }
         </ul>
    </div>
          
</div>

      );
    
  }
}  
  
  
  export default Gife;