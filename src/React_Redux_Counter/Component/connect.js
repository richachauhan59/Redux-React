import React from "react";
import  {CounterContext} from "./reduxProvider";

function connect(mapStateToProps, mapDispatchToProps) {
  
  return function(WrapperComponent) {

    class ConnectWrapper extends React.Component {

      componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const { store } = this.context;
        return (
          <WrapperComponent
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    }

    ConnectWrapper.contextType = CounterContext;
    return ConnectWrapper
  };
}

export default connect;