import styled from 'styled-components'
export const PropsWrapper = styled.div`
  width:100%
  margin-top:30px
  text-align:center
`
export const Title = styled.h3`
  text-align:center
`
// 使用 props 对文字颜色进行改变
export const PropsExa = styled.button`
  display:inline-block
  width:100px
  height:30px
  margin-top:30px
  margin-left:${props => props.color?'30px':0}
  line-height:30px
  font-size:14px
  color:${props=>props.color?props.color:'white'}
  border-radius:5px
  border:none
  outline:none
`