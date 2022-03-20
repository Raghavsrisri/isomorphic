import React, {Component} from "react";
import Layout from '../../components/Layout';
import Hero from "./Hero";

const path = '/';
const action = () => <Layout><Home /></Layout>

class Home extends Component {
  handleClick(event) {
    event.preventDefault();
    window.location = event.currentTarget.pathname;
  }
  render() {
    return (
      <div>
        <Hero />
        <h2>Popular thing to rent</h2>
        <div>
          <a href="/s/Tools" onClick={this.handleClick}>
            <span>Tools</span>
          </a>
          <a href="/s/Books" onClick={this.handleClick}>
            <span>Books</span>
          </a>
          ...
        </div>
      </div>
    );
  }
}

export default { path, action };
