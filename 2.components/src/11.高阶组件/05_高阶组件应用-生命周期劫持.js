import React, { PureComponent } from 'react'


class Home extends PureComponent {
  render() { 
    return ( <div>Home</div> );
  }
}

class Content extends PureComponent {
  render() { 
    return ( <div>Content</div> );
  }
}
 
function withRenderTime(WrapperComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.startTime = Date.now()
    }

    componentDidMount() {
      this.endTime = Date.now()
      const internal = this.endTime - this.startTime
      console.log(`${WrapperComponent.name}渲染时间：${internal}`)
    }

    render() {
      return <WrapperComponent {...this.props} />
    }
  }
}

const TimeHome = withRenderTime(Home)
const TimeContent = withRenderTime(Content)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <TimeHome/>
        <TimeContent/>
      </div>
    )
  }
}
