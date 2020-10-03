import React from "react";
import {connect} from 'react-redux'

class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { total, completed } = this.props;
    var pendings = total - completed;

    return (
      <>
        <div>
          <h1>Total Tasks: {total}</h1>
          <h1>Pending Tasks: {pendings}</h1>
          <h1>Completed Tasks: {completed}</h1>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  total: state.total,
  completed: state.completed
});

export default connect(mapStateToProps, null)(Total);
