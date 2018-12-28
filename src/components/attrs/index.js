import React from 'react'
import { AttrsWrapper, Title, AttrsExa} from './style'
export default class Attrs extends React.Component{
  render(){
    return(
      <AttrsWrapper>
        <Title>Attaching additional props</Title>
        <AttrsExa fontSize = '12px' color="red"> First </AttrsExa>
        <AttrsExa href="http://www.hbbaly.com" fontSize = '16px' color="#f60"> Second </AttrsExa>
      </AttrsWrapper>
    )
  }
}