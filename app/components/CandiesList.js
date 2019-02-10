import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAllCandies } from "../actions/candy.actions";

class CandiesList extends Component {
  componentDidMount() {
    this.props.getAllCandies();
  }

  render() {
    const { candies } = this.props;

    return (
      <div className="container">
        {candies.map(candy => (
          <Link to={`/candies/${candy.id}`} key={candy.id}>
            <div>
              <h1>{candy.name}</h1>
            </div>
          </Link>
        ))}
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
