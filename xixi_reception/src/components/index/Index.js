import React, { useState, useRef } from 'react';
import { SearchBar, Carousel } from 'antd-mobile'
import ShowSearchContent from './ShowSearchContent'
import banner_1 from '../../assets/images/banner_1.png'
import banner_2 from '../../assets/images/banner_2.png'
import banner_3 from '../../assets/images/banner_3.png'

function Index() {
    let [searchText, setSearchText] = useState('搜索您喜欢的商品')
    let [bannerList, setBannerList] = useState(
        [
            banner_1,
            banner_2,
            banner_3
        ]
    )
    let [imgHeight, setImgHeight] = useState(176)

    const childRef = useRef();
    const handleBlock = (e) => {
        // changeVal就是子组件暴露给父组件的方法
        childRef.current.handleBlock();
    }
    const handleNone = (e) => {
        // changeVal就是子组件暴露给父组件的方法
        childRef.current.handleNone();
    }



    return (
        <>
            {/* 头部搜索区域 */}
            <SearchBar placeholder={searchText} maxLength={8} onFocus={handleBlock} onCancel={handleNone} />
            {/* 搜索历史区域 */}
            <ShowSearchContent cRef={childRef} />

            <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => this.setState({ slideIndex: index })}
            >
                {bannerList.map((val, index) => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{
                            display: 'block',
                            position: 'relative',
                            height: imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                setImgHeight({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        </>
    )
}

export default Index