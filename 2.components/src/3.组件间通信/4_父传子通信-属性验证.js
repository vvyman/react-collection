import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height, hobbies } = props;

  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          hobbies.map(hobby => <li>{hobby}</li>)
        }
      </ul>
    </div>
  )
}
// 属性校验
ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  hobbies: PropTypes.array
}

// 默认参数
ChildCpn.defaultProps = {
  name: 'wyman',
  age: 21,
  height: 1.76,
  hobbies: ['code', 'coffee']
}

class ChildCpn2 extends Component {
  // 添加属性验证
  static propTypes = {

  }

  static defaultProps = {

  }
}

export default class App extends Component {
  render() {
    return (
      <div>
       <ChildCpn/>
       <ChildCpn name={'Lin'} age={18} height={1.60} />
      </div>
    )
  }
}
