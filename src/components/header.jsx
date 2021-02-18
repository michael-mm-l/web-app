import React from 'react'
import styled from "styled-components";

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr : [
              {
                headerLabel:"首页",
                headerUrl:"#/"
              },
              {
                headerLabel:"首页",
                headerUrl:"#/detail"
              },
              {
                headerLabel:"mycanvas",
                headerUrl:"#/mycanvas"
              },
              {
                headerLabel:"首页",
                headerUrl:"#/detail"
              },
              {
                headerLabel:"首首页页",
                headerUrl:"#/"
              },
              {
                headerLabel:"首页",
                headerUrl:"#/detail"
              }
            ]
          }

    }
   
    render(){
        return(
            <Div>
                <ul>
                    {
                        this.state.arr.map((item, index) => {
                          console.log(item)  
                          return(
                                <li key={index}>
                                    <a href={item.headerUrl}>{item.headerLabel}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </Div>
        )
    }
}



const Div= styled.div`
    margin:0,auto;
    width:100%;
    height: 80px;
    background-color:#3A4953;
    padding:0px,auto;

    >ul{
        padding: 0;
        margin: 0;
        text-align:center;
        list-style-type:none;

        &>li{
            list-style: none;
            display:inline-block;

            &>a{
                display:block; /* 将链接设为块级元素 */
                background:#3A4953; /* 设置背景色 */
                color:#fff; /* 设置文字颜色 */
                text-decoration:none; /* 去掉下划线 */
                border-right:1px solid #000;
                height:80px;
                width: 120px;
                line-height:80px;
                text-align:center;
            }

        }
    }
`

