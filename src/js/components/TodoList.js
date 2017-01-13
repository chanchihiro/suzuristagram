import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map((todo) => 
			<Todo
				key={todo.id} 
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				/>
		)}
	</ul>
);

{/*
TodoList.propTypes = {
	todos : PropTypes.arrayOf(PropTypes.shape({
		id : PropTypes.number.isRequired,
		text : PropTypes.string.isRequired
	}).isRequired).isRequired
}

()の配列かどうか
指定された形式を満たしているかどうか
条件を満たしているかどうか
*/}

export default TodoList