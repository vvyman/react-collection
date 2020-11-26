import React, { Component } from "react";
import PropTypes from "prop-types";
class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0,
    };
  }
  render() {
    const { titles } = this.props;
    const { curIndex } = this.state;
    return (
      <div className="tab-control">
        {titles.map((title, index) => {
          console.log(title, index, curIndex, index === curIndex);
          return (
            <div
              key={title}
              className={"tab-item " + (index === curIndex ? "active" : "")}
              onClick={() => this.itemClick(index)}
            >
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      curIndex: index,
    });

    const { itemClick } = this.props;
    itemClick(index);
  }
}
TabControl.propTypes = {
  titles: PropTypes.array.isRequired,
};
export default TabControl;
