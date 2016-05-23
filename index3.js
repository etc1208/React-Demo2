var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			lists: []
		};
	},

	handleAdd: function(item) {
		var lists = this.state.lists;
		var newLists = lists.concat(item);
		this.setState({lists: newLists});
	},

	render: function() {
		return (
			<div>
				<h2>TODO LIST</h2>
				<TodoList lists={this.state.lists} />
				<TodoInput counter={this.state.lists.length} addItem={this.handleAdd} />
			</div>
		);
	}
});

var TodoList = React.createClass({
	render: function() {
		var list = this.props.lists.map(function(item, index) {
			return <li key={index}>{item}</li>;
		});
		return (
			<ol>{list}</ol>
		);
	}
});

var TodoInput = React.createClass({
	handleClick: function() {
		this.props.addItem(this.refs.todoInput.value);
		this.refs.todoInput.value = '';
	},

	render: function() {
		return (
			<div>
				<input type='text' ref='todoInput' />
				<input type='submit' value={'Add #'+(this.props.counter+1)} onClick={this.handleClick}/>
			</div>
		);
	}
});

ReactDOM.render(
	<TodoApp />,
	document.getElementById("container")
);