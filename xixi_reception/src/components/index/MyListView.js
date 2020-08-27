import React, { useState, useEffect,useRef } from 'react';
import ReactDOM from 'react-dom'
import { ListView } from 'antd-mobile';
import img from '../../assets/images/list-img.png'
const data = [
    {
        id: 1,
        img: img,
        title: 'Meet hotel',
        des: '2020新款秋季毛衣 鄂尔多斯羊毛 保暖 女秋装 羊毛外衣 百搭 时尚外衣',
    },
    {
        id: 2,
        img: img,
        title: 'McDonald\'s invites you',
        des: 'Nike耐克男子秋季新款 AIR JORDAN 1 LOW SE 低帮运动篮球鞋 秋季爆款',
    },
    {
        id: 3,
        img: img,
        title: 'Eat the week',
        des: 'Nike耐克男子秋季新款 AIR JORDAN 1 LOW SE 低帮运动篮球鞋',
    },
];

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    console.log(dataArr)
    return dataArr;
}

const MyListView = (props) => {
    const lvRef = useRef()
    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,

    });

    let [dataSource1, setDataSource] = useState(dataSource)
    // let [refreshing, setRefreshing] = useState(true)
    let [isLoading, setIsLoading] = useState(true)
    let [height, setHeight] = useState(document.documentElement.clientHeight)
    let [useBodyScroll] = useState(false)
    let rData = []
    console.log(dataSource)
    document.body.style.overflow = 'hidden';
    // const hei = height - ReactDOM.findDOMNode().offsetTop;

    useEffect(() => {
        setTimeout(() => {
            rData = genData();
            setDataSource(dataSource.cloneWithRows(genData()))
            // setHeight(hei)
            // setRefreshing(false)
            setIsLoading(false)
        }, 500);
    })

    console.log(lvRef)

    function onEndReached(event) {
        if (isLoading) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            rData = [...rData, ...genData(++pageIndex)];
            setDataSource(dataSource.cloneWithRows(rData))
            setIsLoading(false)
        }, 1000);
    };


    function handleClick(e) {
        console.log(e)
    }

    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
        // console.log(data.length)

        if (index < 0) {
            index = data.length - 1;
        }
        // console.log(index)

        const obj = data[index--];
        return (
            <div key={obj.id}
                onClick={() => { handleClick(obj.id) }}
                style={{
                    width: "48%",
                    height: '35vh',
                    margin: '1%',
                    backgroundColor: 'pink'
                }}
            >
                <img src={obj.img} style={{ height: '70%', width: '100%' }} />
                <h3 style={{
                    fontSize: '12px', display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '2',
                    overflow: 'hidden',
                    margin: '.5vh 2vw',
                    fontWeight: '400'
                }}>{obj.des}</h3>
            </div>
        );
    };

    return (
        <div>
            <ListView
                ref={lvRef}
                dataSource={dataSource1}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                useBodyScroll={useBodyScroll}
                style={{
                    // height: height,
                    margin: '5px 0',
                }}
                onEndReached={onEndReached}
                pageSize={20}
            />
        </div>
    )
}


export default MyListView