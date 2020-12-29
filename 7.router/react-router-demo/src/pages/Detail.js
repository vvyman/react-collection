import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    const { match } = this.props
    const id = match.params.id
    return (
      <div>
       detail {id}
      </div>
    )
  }
}
