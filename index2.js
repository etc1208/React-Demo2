var Timer = React.createClass({
	getInitialState: function() {
		return {time: 0};
	},

	componentDidMount: function() {
		setInterval(function() {
			this.setState({time: this.state.time + 1});
		}.bind(this), 1000);
	},

	render: function() {
		return (
			<span>Seconds: {this.state.time}s</span>
		);
	}
});

ReactDOM.render(
	<Timer />,
	document.getElementById('container')		
);
