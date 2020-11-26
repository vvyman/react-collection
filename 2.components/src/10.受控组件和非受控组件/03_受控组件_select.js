import React, { PureComponent } from 'react'

export default class App extends PureComponent {

constructor(props) {
  super(props)

  this.state = {
    fruit: "sleep"
  }
}

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
       <select onChange={e => this.handleChange(e)} value={this.state.fruit}>
         <option value="eat">吃饭</option>
         <option value="sleep">睡觉</option>
         <option value="movie">看电影</option>
       </select>
       <input type="submit"  value="上传"/>
      </form>
    )
  }

  handleChange(e) {
    this.setState({
      fruit: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('fruit', this.state.fruit)
  }
}
