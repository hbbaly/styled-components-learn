import React from 'react'
import { ExtendWrapper, Title, ButtonWrapper, Button, ExtendButton} from './style'
// 样式继承
export default class ExtendStyle extends React.Component{
  render(){
    return(
      <ExtendWrapper>
        <Title>Extending Styles</Title>
        <ButtonWrapper>
          <Button>Normal</Button>
          <ExtendButton>Extend</ExtendButton>
        </ButtonWrapper>
      </ExtendWrapper>
    )
  }
}