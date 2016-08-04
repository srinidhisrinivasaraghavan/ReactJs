var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var USER_DATA = {
  name: 'Srinidhi Srinivasa Raghavan',
  username: 'srinidhisrinivasaraghavan',
  image: 'https://avatars0.githubusercontent.com/u/8649439?v=3$s=460'
}

//pure function: gives same result for the same input values
//f(d) = V
var HelloWorld = React.createClass({
	render:function(){
		return(
			<div>Hello World from {this.props.name}</div>
			)
	}
});


var ProfileName = React.createClass({
	render:function(){
		return<div>
			<p>{this.props.name}</p></div>
			
	}
});

var ProfileLink = React.createClass({
	render:function(){
		return(
			<a href={"https://www.github.com/"+this.props.username}>{this.props.username}</a>
			);
	}
});

var ProfilePic = React.createClass({
	render:function(){
		return(
			<img src={this.props.link} alt="Profile Pic" style={{height: 100, width: 100}}></img>
			);
	}
});

var UserProfile = React.createClass({
	render:function(){
		return(
			<div>
			<ProfilePic link={this.props.user.image}/>
			<ProfileName name={this.props.user.name}/>
			<ProfileLink username={this.props.user.username}/>
			
			</div>
			);
	}
});

//ReactDOM.render(<UserProfile user={USER_DATA}/>, document.getElementById('app'));

ReactDOM.render(routes, document.getElementById('app'));