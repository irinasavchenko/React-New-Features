import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue( defaultValue='' ) {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddToDo({ onCreateItem }) {
 // const [value, setValue] = useState('');
 const input = useInputValue('');

  function handleSubmit(event) {
    event.preventDefault();
    if(input.value().trim()) {
      onCreateItem(input.value());
      input.clear();
 //     setValue('');
    }
  }
//<input type="text" value={value} onChange={event => setValue(event.target.value)}/>
  return (
    <form style={{ marginBottom: '10px' }} onSubmit={ handleSubmit }>
      <input { ...input.bind }/>
      <button type="submit">Add ToDo</button>
    </form>
  )
}

AddToDo.propTypes = {
  onCreateItem: PropTypes.func.isRequired
}

export default AddToDo;