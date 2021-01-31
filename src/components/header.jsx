import React from 'react'
import styled from "styled-components";

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
           arr:[]
        }

    }
   
    render(){
        return(
            <Ul>
                {
                    this.props.arr.map((item, index) => {
                        return(
                            <li >
                                <a href='{item.headerUrl}'>{item.headerLabel}</a>
                            </li>
                        )
                    })
                }
            </Ul>
        )
    }
}

const Ul= styled.ul`
    padding: 0;
    margin: 0;
    li{
        list-style: none;
        float:left;
        a{
            display:block; /* 将链接设为块级元素 */
            padding:8px 50px; /* 设置内边距 */
            background:#3A4953; /* 设置背景色 */
            color:#fff; /* 设置文字颜色 */
            text-decoration:none; /* 去掉下划线 */
            border-right:1px solid #000;
        }
    }
`