import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <ChildComp name={"Wyman"} age={10} job={"coder"} />
      </div>
    );
  }
}

function ChildComp(props) {
  const { name, age, job } = props;
  return <div>{name + age + job}</div>;
}
