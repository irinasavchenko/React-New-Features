import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    backgroundColor: 'red'
  }
};

function ToDoListItem( { todo, index, onChange } ) { //props can change on { todo }
  const classes = [];

  const { removeItem } = useContext(Context);

  if(todo.completed) {
    classes.push('done');
  }
  return(
  <li style={ styles.li }>
    <span className={classes.join(' ')}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onChange(todo.id)}
      />
      <strong>{ index }</strong>
      &nbsp;
      { todo.title }
    </span>
    <button style={ styles.button } onClick={() => removeItem(todo.id)}>&times;</button>
  </li>
  )
}

ToDoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default ToDoListItem;