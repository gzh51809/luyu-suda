import React, { Component } from 'react';
import '../sass/gife.scss';
import { Carousel, WingBlank } from 'antd-mobile';

class Gife extends Component {
    constructor(){
        super();
        this.state={
            data: ['1', '2','3'],
            imgHeight: 176,
            banner:[]
        }
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
        <div className='left'><img src={'../img/banner1.png'}/></div>
        <div className='right1'></div>
        <div className='right2'></div>
    </div>
    <div className='list'>

    </div>
          
</div>

      );
    
  }
}  
  
  
  export default Gife;