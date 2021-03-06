import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import Chart from '../components/chart';

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather=>weather.main.temp);
		const pressures = cityData.list.map(weather=>weather.main.pressure);
		const humidities = cityData.list.map(weather=>weather.main.humidity);
		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data={temps} color='orange' units="k" />
				</td>
				<td>
					<Chart data={pressures} color='green' units="hPa"/>
				</td>
				<td>
					<Chart data={humidities} color='black' units="%"/>
				</td>
			</tr>
			);
	}
	render(){
		//console.log("In comp", this.state.weather);
		return(
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temp(K)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state){
	console.log("In comp", state.weather);
	return({ weather:state.weather}); //ES6   {weather:state.weather}//ES5
}

export default connect(mapStateToProps)(WeatherList);