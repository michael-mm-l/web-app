import React from "react";
import styled from 'styled-components'
import {textState} from "../atom/atom";
import {useRecoilState} from "recoil";
import {get} from '../axios/axios';
import url from '../axios/url';

export default function Custom() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        get(url.my_application_list).then(resule=>{
            setText(resule.key)
        });
    };

    return (
        <Div onClick={onChange.bind(this)}>
            <div>{text}</div>
        </Div>
    )

}

const Div = styled.div`
  height: 300px;
  width: 100%;
  margin: 0;

  > div {
    margin-top: 10px;
    width: 100px;
    height: 100px;
    background-color: #ffff11;
  }
`

