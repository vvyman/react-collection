import React, { PureComponent } from "react";
import store from "../store";

export function connect(mapStateToProps, mapDispatchProps) {
  return function enhanceHOC(WrapperComponent) {
    return class extends PureComponent {

      constructor(props) {
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState()) 
        }
      }

      componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unSubscribe()
      }


      render() {
        return (
          <WrapperComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchProps(store.dispatch)}
          />
        );
      }
    };
  };
}
