import React, { PureComponent } from 'react'

export default class Product extends PureComponent {
  render() {
    return (
      <ul>
       {[1,2,3,4,5].map(item => {
         return <h2>商品{item}</h2>
       })} 
      </ul>
    )
  }
}
