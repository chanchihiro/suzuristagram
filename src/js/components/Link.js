import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'


const Link = ({ children, onClick }) => (
	<a href='#'
		onClick={(e) => {
			e.preventDefault()
			onClick()
		}}
	>
		{children}
	</a>
);

Link.propTypes = {
	children : PropTypes.node.isRequired,
	onClick : PropTypes.func.isRequired
}

export default Link