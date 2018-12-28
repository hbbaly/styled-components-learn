import React from 'react'
import { RotateWrapper, Rotate } from './style'
export default class Animations extends React.Component{
  render(){
    return(
      <RotateWrapper>
        <h2>Animations</h2>
        <Rotate></Rotate>
      </RotateWrapper>
    )
  }
}