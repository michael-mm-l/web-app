import React from "react";
import styled from 'styled-components'
import { textState } from "../atom/atom";
import { useRecoilState,selector } from "recoil";

export default function Custom1(){
    const charCountState = selector({
        key: 'charCountState', 
        get: ({get}) => {
            const text = get(textState);

            return text;
        },
    });


    const  aa = useRecoilState(charCountState)

    return(
        <Div>
            <div bgColor="red">{aa}</div>
        </Div>
    )

}

const Div = styled.div`
    height:300px;
    width: 100%;
    margin:0;

    >div{
        margin:auto;
        width:100px;
        height:100px;
        background-color: red
    }
`

