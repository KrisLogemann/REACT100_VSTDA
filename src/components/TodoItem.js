import React, { Component } from 'react';

function priorityColor(priority) {
  if (priority == 1) {
    return ('success');
  } else if (priority == 2) {
    return 'warning';
  } else if (priority == 3) {
    return 'danger';
  }
}

export class TodoItem extends Component {
  getStyle() {
    return {
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    };
  }

  render() {
    const { id, title } = this.props.todo;
      // Priority Colors
    return (
      <div style={ this.getStyle() }>
        <ul className='list-group'>
          <li className={ `list-group-item-${priorityColor(this.props.priority)} clearfix` }>
            <p>
              <input type='checkbox' onChange={ this.props.markComplete.bind(this, id) } /> {' '}
              { title }
              <button
                className='delete-todo list-group-item-danger pull-right'
                style={ { marginRight: 10 } }
                onClick={ this.props.delTodo.bind(this, id) }
              >
            Delete
            </button>
              <button
                className='edit-todo list-group-item-success pull-right'
                style={ { marginRight: 10 } }
                value={ this.props.toggleDisplay }
                onClick={ this.editDisplay }
              >
              Edit
            </button>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
export default TodoItem;
