import React from "react";
import PropTypes from "prop-types";

class Context extends React.Component {
  staticchildContextTypes = {
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
    returnReact.Children.only(this.props.children);
  }
}

export default Context;
