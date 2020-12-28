import React, { PureComponent } from "react";
// react-saga的使用
import { connect } from "react-redux";
import {
  addAction,
  fetchHomeMultiDataAction
} from "../store/actionCreators";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultiData()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前记数为：{this.props.counter}</h2>
        <button onClick={(e) => this.props.increment()}>+1</button>
        <button onClick={(e) => this.props.addNumber(5)}>+5</button>
        <h1>Banner</h1>
        <ul>
          {this.props.banner && this.props.banner.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
        <h1>Recommend</h1>
        <ul>
          {this.props.recommend && this.props.recommend.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banner: state.banner,
    recommend: state.recommend,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(addAction(1));
  },
  addNumber(num) {
    dispatch(addAction(num));
  },
  getHomeMultiData() {
    dispatch(fetchHomeMultiDataAction)
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
