import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllCandies } from "../actions/candy.actions";

class CandiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candies: []
    };
  }

  componentDidMount() {
    this.props.getAllCandies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.candies.length !== prevProps.candies.length) {
      this.setState({ candies: this.props.candies });
    }
  }

  render() {
    const { candies } = this.state;

    return (
      <div className="container">
        {candies.map(candy => {
          return (
            <div key={candy.name}>
              <h1>{candy.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.candies
});

const mapDispatchToProps = dispatch => ({
  getAllCandies: () => dispatch(getAllCandies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandiesList);
