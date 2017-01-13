import { connect } from 'react-redux'
import { filterTodo } from '../actions/Actions'
import Link from '../components/Link'


const mapStateToProps = (state, ownProps) => {
	return {state: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(filterTodo(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink