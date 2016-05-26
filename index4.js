var MyForm = React.createClass({
	getInitialState: function() {
		return {
			options: ['B']
		};
	},

	handleChange: function(ev) {
		var checked = [];
		var sel = ev.target;
		for(var i=0;i<sel.length;i++) {
			if(sel.options[i].selected) checked.push(sel.options[i].value);
		}
		this.setState({
			options: checked
		});
	},
	submitHandler: function(ev) {
		ev.preventDefault();
		alert(this.state.options);
	},

	render: function() {
		return (
			<form onSubmit={this.submitHandler}>
				<select multiple='true' value={this.state.options} onChange={this.handleChange}>
					<option value='A'>A</option>
					<option value='B'>B</option>
					<option value='C'>C</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		);
	}
});

/*ReactDOM.render(
	<MyForm />,
	document.getElementById('container')
);*/

var MyForm2 = React.createClass({
	getInitialState: function() {
		return {
			firstname: '',
			lastname: ''
		};
	},

	submitHandler: function(e) {
		e.preventDefault();
		alert(this.state.firstname+"-"+this.state.lastname);
	},

	handleChange: function(name, ev) {
		var newState = {}; 
		newState[name] = ev.target.value;
		this.setState(newState);
	},

	render: function() {
		return (
			<form onSubmit={this.submitHandler}>
				<label htmlFor='firstname'>First name:</label>
				<input 
					type='text'
					value={this.state.firstname}
					onChange={this.handleChange.bind(this,'firstname')}
					name='firstname'
				/>
				<br />
				<label htmlFor='lastname'>Last name:</label>
				<input 
					type='text'
					value={this.state.lastname}
					onChange={this.handleChange.bind(this, 'lastname')}
					name='lastname'
				/>
				<br />
				<button type='submit'>Submit</button>
			</form>
		);
	} 
});

/*ReactDOM.render(
	<MyForm2 />,
	document.getElementById('container')
);*/

var MyForm3 = React.createClass({
	mixins: [React.addons.LinkedStateMixin],

	getInitialState: function() {
		return {
			firstname: '',
			lastname: ''
		};
	},

	submitHandler: function(e) {
		e.preventDefault();
		alert(this.state.firstname+"-"+this.state.lastname);
	},

	render: function() {
		return (
			<form onSubmit={this.submitHandler}>
				<label htmlFor='firstname'>First name:</label>
				<input 
					type='text'
					valueLink = {this.linkState('firstname')}
					name='firstname'
				/>
				<br />
				<label htmlFor='lastname'>Last name:</label>
				<input 
					type='text'
					valueLink = {this.linkState('lastname')}
					name='lastname'
				/>
				<br />
				<button type='submit'>Submit</button>
			</form>
		);
	} 
});

/*ReactDOM.render(
	<MyForm3 />,
	document.getElementById('container')
);
*/


//自定义表单组件

var Radio = React.createClass({
	propTypes: {
		onChange: React.propTypes.func
	},

	getInitialState: function() {
		return {
			value: this.props.defaultValue
		};
	},

	handleChange: function(e) {
		if(this.props.onChange) this.props.onChange(e);
		this.setState({
			value: e.target.value
		});
	},

	render: function() {
		var children = {};
		var value = this.props.value || this.state.value;
		React.children.forEach(this.props.children, function(child, i) {
			var label = (
				<label>
					<input 
						type='radio'
						name={this.props.name}
						value={child.props.value}
						checked={child.props.value == value}
						onChange={this.handleChange}
					/>
					{child.props.children}
				</label>
			);
			children['label'+i] = label;
		}.bind(this));
		return this.transferPropsTo(<span>{children}</span>);
	}
});
