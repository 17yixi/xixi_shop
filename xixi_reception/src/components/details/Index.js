/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { ListView } from 'antd-mobile';
import img from '../../assets/images/list-img.png'
import title_img from '../../assets/images/title.png'

const data = [
    {
        id: 1,
        img: img,
        title: 'Meet hotel',
        des: '2020新款秋季毛衣 鄂尔多斯羊毛 保暖 女秋装 羊毛外衣 百搭 时尚外衣',
        price: 2000
    },
    {
        id: 2,
        img: img,
        title: 'McDonald\'s invites you',
        des: 'Nike耐克男子秋季新款 AIR JORDAN 1 LOW SE 低帮运动篮球鞋 秋季爆款',
        price: 560
    },
    {
        id: 3,
        img: img,
        title: 'Eat the week',
        des: 'Nike耐克男子秋季新款 AIR JORDAN 1 LOW SE 低帮运动篮球鞋',
        price: 299
    },
];
const NUM_ROWS = 6;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    console.log(dataArr)
    return dataArr;
}

class Index extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: true,
        };
    }

    componentDidUpdate() {
        console.log(this.state.dataSource)
        document.body.style.overflow = 'hidden';
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        console.log(this)
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(genData()),
                height: hei,
                refreshing: false,
                isLoading: false,
            });
        }, 1000);
    }
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = [...this.rData, ...genData(++pageIndex)];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1500);
    };


    render() {
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
                    className="list_item"
                    onClick={() => { handleClick(obj.id) }}
                >
                    <img src={obj.img} style={{ height: '70%', width: '100%' }} />
                    <h3 >{obj.des}</h3>
                    <span className="show_price">¥{obj.price}</span>
                </div>
            );
        };
        return (<>

            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ height: '30px', padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderHeader={() => {
                    return (<h3 className="list_title">热门推荐</h3>)
                }}
                useBodyScroll={this.state.useBodyScroll}
                style={{
                    height: this.state.height,
                    margin: '5px 0',
                }}
                onEndReached={this.onEndReached}
                pageSize={20}
            />
        </>);
    }
}

export default Index