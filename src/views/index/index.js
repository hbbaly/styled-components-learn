import React from 'react'
import VHeader from '../../components/index/index'
import Props from '../../components/props/index'
import ExtendStyle from '../../components/extendStyle/index'
import InComponents from '../../components/inComponents/index'
import Attrs from '../../components/attrs/index'
import Animations from '../../components/animations/index'
export default class Index extends React.Component{
  render(){
    return(
      <div>
        <VHeader />
        <Props />
        <ExtendStyle />
        <InComponents />
        <Attrs />
        <Animations />
      </div>
    )
  }
}