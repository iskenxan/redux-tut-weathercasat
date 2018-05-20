import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {

  getMappedProperty = (cityData, propertyName) => {
    return cityData.list.map(item => item.main[propertyName])
  }


  renderWeatherList = () => {
    return this.props.weather.map(cityData => {
      const temp = this.getMappedProperty(cityData,'temp')
      const pressure = this.getMappedProperty(cityData,'pressure')
      const humidity = this.getMappedProperty(cityData,'humidity')
      return (
        <tr key={cityData.city.name}>
          <td>{cityData.city.name}</td>
          <td><Chart data={temp} color={'blue'} /></td>
          <td><Chart data={pressure} color={'red'} /> </td>
          <td><Chart data={humidity} color={'brown'} /></td>
        </tr>
      );
    });
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeatherList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);
