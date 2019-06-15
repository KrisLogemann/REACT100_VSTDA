import React, { Component } from 'react';

export class AddTodo extends Component {
  render() {
    return (
      <form>
          <input
              type='text'
              name='title'
              placeholder='Add Todo...'
            />
          <input
              type='submit'
              value='submit'
              className='btn'
            />
        </form>
    );
  }
}

export default AddTodo;
