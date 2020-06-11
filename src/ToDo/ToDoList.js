import React from 'react';
import ToDoListItem from '../ToDo/ToDoListItem';
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyle: 'none'
  }
};

function ToDoList( props ) {
  return (
    <ul style={ styles.ul }>
     { props.todos.map((todo, index) => { return <ToDoListItem todo={ todo } key={ todo.id } index={ index + 1 } onChange={ props.onToggle }></ToDoListItem> })}
    </ul>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ToDoList