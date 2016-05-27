var React = require('react');
var ButtonActions = require('./ButtonActions');
var MyButton = require('./MyButton');
var ListStore = require('./ListStore'); 

var MyButtonController = React.createClass({
	getInitialState: function() {
		return {
			items: ListStore.getAll()
		};
	},

	componentDidMount: function() {
		ListStore.addChangeListener(this._onChange);
	},

	componentWillUnMount: function() {
		ListStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			items: ListStore.getAll()
		});
	},

	createNewItem: function(e) {
		ButtonActions.addNewItem('new item');
	},
	render: function() {
		return (
			<MyButton 
				items={this.state.items}
				onClick={this.createNewItem} 
			/>
		);
	}
});

module.exports = MyButtonController;
