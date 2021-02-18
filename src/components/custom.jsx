import React from "react";
import styled from 'styled-components'
import { textState } from "../atom/atom";
import { useRecoilState } from "recoil";


export default function Custom(){
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText("#ff0000");
      };

    return(
        <Div  onClick={onChange}>
            <div>{text}</div>
        </Div>
    )

}

const Div = styled.div`
    height:300px;
    width: 100%;
    margin:0;

    >div{
        margin-top: 10px;
        width:100px;
        height:100px;
        background-color:#ffff11;
    }
`

