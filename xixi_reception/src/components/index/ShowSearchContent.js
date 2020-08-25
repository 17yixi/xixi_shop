import React, { useState, useImperativeHandle } from 'react';
import '../../css/showSearch.css'

function ShowSearchContent({ cRef }) {
    let [display, setDisplay] = useState('none')

    useImperativeHandle(cRef, () => ({
        // changeVal 就是暴露给父组件的方法
        handleBlock: () => {
            setDisplay('block')
        },
        handleNone: () => {
            setDisplay('none')
        }
    }))
    // function handleBlock() {
    //     setDisplay('block')
    // }

    function handleNone() {
        setDisplay('none')
    }
    return (
        <div className="showSearch" style={{ display: display }}>
            <div className="content">
                <h4>搜索历史：</h4>
                <ul className="clearfix">
                    <li>连衣裙连衣裙连衣</li>
                    <li>连衣裙连衣裙连衣</li>
                    <li>连衣裙连衣裙连衣</li>
                    <li>连衣裙连衣裙连衣</li>
                    <li>连衣衣裙连衣</li>
                    <li>连衣裙连衣裙连衣</li>
                    <li>连衣裙衣</li>
                    <li>连衣裙连衣裙连衣</li>
                    <li>连衣裙</li>
                    <li>连衣裙</li>
                    <li>连衣裙</li>
                    <li>连衣裙</li>
                </ul>
                <span>清空历史记录</span>
            </div>
            <div className="kongbai" onClick={handleNone}></div>
        </div>
    )
}

export default ShowSearchContent