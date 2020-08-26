import React, { useState, useRef, useEffect } from 'react';
import { SearchBar, Carousel, Grid, NoticeBar, PullToRefresh, ListView } from 'antd-mobile'
import ShowSearchContent from './ShowSearchContent'
import banner_1 from '../../assets/images/banner_1.png'
import banner_2 from '../../assets/images/banner_2.png'
import banner_3 from '../../assets/images/banner_3.png'
import man from '../../assets/images/man.png'
import woman from '../../assets/images/woman.png'
import xianshi from '../../assets/images/xianshi.png'
import huodong from '../../assets/images/huodong.png'
import newWoman from '../../assets/images/new_woman.png'
import newMan from '../../assets/images/new_man.png'
import sport from '../../assets/images/sport.png'

function Index(props) {
	let [searchText, setSearchText] = useState('搜索您喜欢的商品')
	let [bannerList, setBannerList] = useState([banner_1, banner_2, banner_3])
	let [imgHeight, setImgHeight] = useState(176)
	let [historySearch, setHistorySearch] = useState(
		[
			'连衣衣裙连衣',
			'连衣衣裙连衣',
			'连衣衣裙连衣',
			'连衣衣裙连衣',
			'连衣衣裙连衣',
			'连衣衣裙连衣裙',
			'连衣衣裙连衣裙',
			'连衣衣裙连衣裙',
			'连衣衣裙连衣',
			'连衣裙',
			'连衣裙',
			'连衣裙',
			'连衣裙',
			'连衣裙',
			'连衣裙',
		]
	)
	let [notice, setNotice] = useState('号外号外: 秋冬装今日上新，限时折扣活动即日开始，到店选购还有精美礼品相送，先到先得抓紧时间抢购吧！！！')

	useEffect(() => {
		window.localStorage.setItem('historySearch', historySearch)
	})

	const dataList = [
		{
		  img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
		  title: 'Meet hotel',
		  des: '不是所有的兼职汪都需要风吹日晒',
		},
		{
		  img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
		  title: 'McDonald\'s invites you',
		  des: '不是所有的兼职汪都需要风吹日晒',
		},
		{
		  img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
		  title: 'Eat the week',
		  des: '不是所有的兼职汪都需要风吹日晒',
		},
	  ];

	const data = [
		{ icon: man, text: '男装爆款' },
		{ icon: woman, text: '女装爆款' },
		{ icon: xianshi, text: '限时折扣' },
		{ icon: huodong, text: '会员活动' }
	]

	const childRef = useRef();
	const handleBlock = (e) => {
		// handleBlock就是子组件暴露给父组件的方法
		childRef.current.handleBlock();
	}
	const handleNone = (e) => {
		// handleNone就是子组件暴露给父组件的方法
		childRef.current.handleNone();
	}

	function bannerToGo() {
		props.history.push('/details')
	}

	function handleToGo(e) {
		console.log(e.text);
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
			>
				{bannerList.map((val, index) => (
					<a
						key={val}
						onClick={bannerToGo}
						// href="http://www.alipay.com"
						style={{
							display: 'block',
							position: 'relative',
							height: imgHeight,
							boxShadow: '1px 0px 5px rgba(0, 0, 0, 0.2)',
						}}
					>
						<img
							src={val}
							alt=""
							style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
						// onLoad={() => {
						// 	// fire window resize event to change height
						// 	window.dispatchEvent(new Event('resize'));
						// 	setImgHeight({ imgHeight: 'auto' });
						// }}
						/>
					</a>
				))}
			</Carousel>
			<Grid data={data} activeStyle={false} hasLine={false} onClick={handleToGo} />
			<NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
				{notice}
			</NoticeBar>
			<div className="news">
				<div className="news-left">
					<img src={newWoman} />
				</div>
				<div className="news-right">
					<div className="right-top">
						<img src={newMan} />
					</div>
					<div className="right-bottom">
						<img src={sport} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Index