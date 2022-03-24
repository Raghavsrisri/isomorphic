import React from "react";
import PropTypes from "prop-types";

class Context extends React.Component {
  static childContextTypes = {
    page: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.number,
    }),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  };
  getChildContext() {
    return {
      page: this.props.page,
      user: this.props.user,
    };
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

export default Context;
