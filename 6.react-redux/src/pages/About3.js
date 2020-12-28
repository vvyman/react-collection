import { connect } from 'react-redux'

import { decAction, subAction } from '../store/actionCreators'

function About(props) {
    return (
      <div>
        <h1>About</h1>
        <h2>当前记数为：{ props.counter }</h2>
        <button onClick={ e => props.decrement()}>-1</button>
        <button onClick={ e => props.subNumber(5)}>-5</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch(decAction()),
    subNumber: number => dispatch(subAction(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
