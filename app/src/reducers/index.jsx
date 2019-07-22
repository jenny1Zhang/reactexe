import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const todoPage = combineReducers({
  todos, visibilityFilter
})

export default todoPage;
