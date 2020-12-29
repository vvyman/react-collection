import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    const {location} = this.props
    console.log('location', location)
    return (
      <div>
        {Object.keys(location.state).map(key => {
          return <h1>{key}: {location.state[key]}</h1>
        })}
      </div>
    )
  }
}
