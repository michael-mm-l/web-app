import React from "react";
import styled from "styled-components";
import { textState } from "../atom/atom";
import { useRecoilState } from "recoil";

export default function Custom1() {
  const [text] = useRecoilState(textState);
  return (
    <Div>
      <div>{text}</div>
    </Div>
  );
}

const Div = styled.div`
  height: 300px;
  width: 100%;
  margin: 0;

  > div {
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: red;
  }
`;
