import React, { PureComponent } from "react";

import { connect } from "react-redux";
import {
  addAction,
  changeBannerAction,
  changeRecommendAction,
} from "../store/actionCreators";
import axios from "axios";

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      const data = res.data.data;
      this.props.changeBanner(data.banner.list);
      this.props.changeRecommend(data.recommend.list);
    });
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
          {this.props.banner.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
        <h1>Recommend</h1>
        <ul>
          {this.props.recommend.map((item, index) => {
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
  changeBanner(banner) {
    dispatch(changeBannerAction(banner));
  },
  changeRecommend(recommend) {
    dispatch(changeRecommendAction(recommend));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
