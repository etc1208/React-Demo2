var React = require('react');

var MyButton = function(props) {
	var items = props.items;
	var itemHtml = items.map(function(item, i) {
		return <li key={i}>{item}</li>;
	});

	return (
		<div>
			<ul>{itemHtml}</ul>
			<button onClick={props.onClick}>New</button>
		</div>
	);
};

module.exports = MyButton;
