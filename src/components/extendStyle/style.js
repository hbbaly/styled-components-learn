import styled from 'styled-components'

export const ExtendWrapper = styled.div`
  width:100%
  margin-top:30px
  text-align:center
`
export const Title = styled.h3`

`
export const ButtonWrapper = styled.div`
  display:flex
  justify-content: space-around
  margin-top:30px
`
export const Button = styled.button`
  padding:5px 10px
  border:2px solid #f60
  border-radius:5px
  outline:none
`
// 继承了Button 的定义的样式
export const ExtendButton = styled(Button)`
  color:#f60
`

// In some cases you might want to change which tag or component a styled component renders.

//  You can use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote: