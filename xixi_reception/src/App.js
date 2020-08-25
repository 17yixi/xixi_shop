import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/index/Index'
import List from './components/category/Index'
import Cart from './components/cart/Index'
import My from './components/my/Index'
import { TabBar } from 'antd-mobile';


function App(props) {
  let [selectedTab, setSelectedTab] = useState(1)
  let [fullScreen] = useState(true)
  return (
    <>
      <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ff1493"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="1"
            icon={<i className="iconfont iconhome"></i>}
            selectedIcon={<i style={{ color: '#ff1493' }} className="iconfont iconhome"></i>}
            selected={selectedTab === 1}
            onPress={() => {
              setSelectedTab(1)
              props.history.push('/index/home')
            }}
          >
            <Route path='/index/home' component={Home} />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont iconall"></i>}
            selectedIcon={<i style={{ color: '#ff1493' }} className="iconfont iconall"></i>}
            title="分类"
            key="2"
            badge={'new'}
            selected={selectedTab === 2}
            onPress={() => {
              setSelectedTab(2)
              props.history.push('/index/list')
            }}
          >
            <Route path='/index/list' component={List} />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont iconcart-Empty"></i>}
            selectedIcon={<i style={{ color: '#ff1493' }} className="iconfont iconcart-Empty"></i>}
            title="购物车"
            key="3"
            badge={1}
            selected={selectedTab === 3}
            onPress={() => {
              setSelectedTab(3)
              props.history.push('/index/cart')
            }}
          >
            <Route path='/index/cart' component={Cart} />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont iconuser"></i>}
            selectedIcon={<i style={{ color: '#ff1493' }} className="iconfont iconuser"></i>}
            title="我的"
            key="4"
            selected={selectedTab === 4}
            onPress={() => {
              setSelectedTab(4)
              props.history.push('/index/my')
            }}
          >
            <Route path='/index/my' component={My} />
          </TabBar.Item>
        </TabBar>
      </div>
    </>
  );
}


export default App