import React, { Component } from 'react';
import Index from './views/index/index'
// 引用 GlobalStyle 全局样式   // Place it at the top of your React tree,放在我们react dom结构的顶部
import { GlobalStyle } from './style'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Index />
      </div>
    );
  }
}

export default App;
