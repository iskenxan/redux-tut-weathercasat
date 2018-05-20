import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.state.term);
    this.setState({ term: '' })
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast for your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search:fetchWeather
  },dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
