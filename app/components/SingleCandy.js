import React, { Component } from "react";
import { connect } from "react-redux";

import { getOneCandy, updateQuantity } from "../actions/candy.actions";

class SingleCandy extends Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    const candyId = this.props.match.params.id;
    this.props.getOneCandy(candyId);
  }

  increase() {
    const quantity = this.props.candy.quantity;
    this.props.updateQuantity(this.props.candy.id, quantity + 1);
  }

  decrease() {
    const quantity = this.props.candy.quantity;
    this.props.updateQuantity(this.props.candy.id, quantity - 1);
  }

  render() {
    const { candy } = this.props;

    return (
      <div>
        <h1>
          {candy.name}
          <span className="count">{candy.quantity}</span>
        </h1>
        <img src={candy.imageUrl} />
        <div className="buttons">
          <button className="button" onClick={this.increase}>
            Increase
          </button>
          <button className="button" onClick={this.decrease}>
            Desrease
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candy: state.candy
});

const mapDispatchToProps = dispatch => ({
  getOneCandy: candyId => dispatch(getOneCandy(candyId)),
  updateQuantity: (candyId, quantity) =>
    dispatch(updateQuantity(candyId, quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
