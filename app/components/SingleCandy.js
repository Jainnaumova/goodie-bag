import React, { Component } from "react";
import { connect } from "react-redux";

import { getOneCandy } from "../actions/candy.actions";

class SingleCandy extends Component {
  componentDidMount() {
    const candyId = this.props.match.params.id;
    this.props.getOneCandy(candyId);
  }

  render() {
    const { candy } = this.props;

    return (
      <div>
        <h1>{candy.name}</h1>
        <img src={candy.imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candy: state.candy
});

const mapDispatchToProps = dispatch => ({
  getOneCandy: candyId => dispatch(getOneCandy(candyId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
