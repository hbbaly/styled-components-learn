import React from 'react'
import styled from 'styled-components'
const ClassWrapper = styled.div`
  width:100%
  margin-top:30px
  text-align:center
`
export const Title = styled.h1`
  color:#f60
`
export default class PassedStyled extends React.Component{
  render(){
    return(
      <ClassWrapper>
        <Title>How do Styled Components work within a component?</Title>
      </ClassWrapper>
    )
  }
}