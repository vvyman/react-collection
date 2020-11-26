import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App: {this.props.name}
      </div>
    )
  }
}

function enhanceComponent(WrapperComponent) {
   class NewComponent extends PureComponent {
     render() {
       return <WrapperComponent {...this.props} />
     }
   }
   
   NewComponent.displayName = 'Wyman'
   return NewComponent
}

function enhanceComponentFunctional(WrapperComponent) {
  function NewComponent(props) {
    return <WrapperComponent {...props}/>
  }
  NewComponent.displayName = "Lin"
  return NewComponent
}
// 类组件
// const EnhancedComponent = enhanceComponent(App)
// 函数式组件
const EnhancedComponent = enhanceComponentFunctional(App)

export default EnhancedComponent
