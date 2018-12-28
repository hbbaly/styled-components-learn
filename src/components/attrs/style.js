import styled from 'styled-components'
export const AttrsWrapper = styled.div`

`
export const Title = styled.h1`
  line-height:50px
  color:#ccc
`
export const AttrsExa = styled.a.attrs({
  href:props => props.href || '/',
  fontSize: props => props.fontSize || "14px",
  color: props => props.color || "#000"
})`
  display:block
  margin-top:10px
  font-size:${props => props.fontSize}
  color:${ props => props.color}
`