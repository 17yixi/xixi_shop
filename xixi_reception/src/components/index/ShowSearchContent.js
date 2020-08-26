import React, { useState, useImperativeHandle, useEffect } from 'react';
import '../../css/showSearch.css'

function ShowSearchContent({ cRef }) {
    let [display, setDisplay] = useState('none')
    let [hisList, setHisList] = useState([])

    useImperativeHandle(cRef, () => ({
        // handleBlock,handleNone 就是暴露给父组件的方法
        handleBlock: () => {
            setDisplay('block')
        },
        handleNone: () => {
            setDisplay('none')
        }
    }))

    useEffect(() => {
        if (window.localStorage.getItem('historySearch') == null) {
            setHisList([])
        } else {
            setHisList(window.localStorage.getItem('historySearch').split(','))

        }
    }, [])

    const clearHisList = () => {
        window.localStorage.removeItem('historySearch')
        setHisList([])
    }

    function handleNone() {
        setDisplay('none')
    }
    return (
        <div className="showSearch" style={{ display: display }}>
            <div className="content">
                <h4>搜索历史：</h4>
                <ul className="clearfix">
                    {hisList.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <span onClick={clearHisList}>清空历史记录</span>
            </div>
            <div className="kongbai" onClick={handleNone}></div>
        </div>
    )
}

export default ShowSearchContent