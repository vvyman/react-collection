import React, { PureComponent } from "react";
// 解除对store的强依赖
// 引入Context对象
import { StoreContext } from './context'

export function connect(mapStateToProps, mapDispatchProps) {
  return function enhanceHOC(WrapperComponent) {
    class enhanceComponent extends PureComponent {

      constructor(props, context) {
        super(props, context);
        this.state = {
          storeState: mapStateToProps(context.getState()) 
        }
      }

      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
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
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchProps(this.context.dispatch)}
          />
        );
      }
    };
    enhanceComponent.contextType = StoreContext
    return enhanceComponent
  };
}
