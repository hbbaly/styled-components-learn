import React from 'react'
import { PropsWrapper, Title, PropsExa } from './style'
// 使用 props
export default class Props extends React.Component{
  render(){
    return(
      <PropsWrapper>
        <Title>Adapting based on props</Title>
        <PropsExa>Normal</PropsExa>
        {/* 传递color */}
        <PropsExa color="red">Red</PropsExa>
      </PropsWrapper>
    )
  }
}