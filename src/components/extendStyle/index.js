import React from 'react'
import { ExtendWrapper, Title, ButtonWrapper, Button, ExtendButton} from './style'
// 样式继承

// In some cases you might want to change which tag or component a styled component renders.

//  You can use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote:

// 如果我们在某些时候需要改变标签的类型，可以使用as来进行改变。  下例就使用了as把button转化为a标签
export default class ExtendStyle extends React.Component{
  render(){
    return(
      <ExtendWrapper>
        <Title>Extending Styles</Title>
        <ButtonWrapper>
          <Button>Normal</Button>
          <ExtendButton as='a' href='http://www.hbbaly.com'>Extend</ExtendButton>
        </ButtonWrapper>
      </ExtendWrapper>
    )
  }
}