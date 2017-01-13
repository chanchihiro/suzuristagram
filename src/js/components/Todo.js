import React, { PropTypes } from 'react'

const Todo = ({ completed, text, onClick }) => (
	<li 
	onClick = {onClick} 
	style={{textDecoration: completed ? 'line-through': 'none'}}>
		{text}
	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	text : PropTypes.string.isRequired,
	completed : PropTypes.bool.isRequired
}

export default Todo