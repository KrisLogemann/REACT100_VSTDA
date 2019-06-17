import React, { Component } from 'react';

// Priority Colors
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
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: '',
      priority: '',
      toggleDisplay: false
    };

    this.editDisplay = this.editDisplay.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

// Edit Display
  editDisplay() {
    this.props.editTodo(
      this.state.title,
      this.state.priority,
      this.props.id)
      console.log(this.state.title);
      this.toggleEdit();
}
      toggleEdit() {
        this.setState({
        toggleDisplay: !this.state.toggleDisplay
      });
    }
  getStyle() {
    return {
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    };
  }
  onChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    } else if (e.target.name === 'priority') {
      this.setState({ priority: e.target.value });
    }
    console.log('in edit')
  }
  
  render() {
    const { id, title } = this.props.todo;
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
                <i className='fa fa-trash' />
              </button>
              <button
                className='edit-todo list-group-item-success pull-right'
                style={ { marginRight: 10 } }
                value={ this.state.toggleDisplay }
                onClick={ () => this.toggleEdit() }
              >
                <i className='fa fa-pen' />
              </button>
            </p>
          </li>
        </ul>
        {this.state.toggleDisplay ? (
          <div
            className={ `alert-${priorityColor(
              this.props.priority
            )} clearfix` }
          >
            <div>
              <label htmlFor='update-todo-text'>Description</label>
              <textarea
                className='update-todo-text form-control'
                name='title'
                id='exampleFormControlTextarea1'
                rows='5'
                value={ this.state.title }
                onChange={ this.onChange }
              />
            </div>

            <div>
              <label htmlFor='inputState'>
                      How much of a priority is this?
                    </label>
              <select
                name='priority'
                id='inputState'
                className='form-control update-todo-priority'
                value={ this.state.priority }
                onChange={ this.onChange }
              >
                <option selected>Select a Priority</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
              </select>
            </div>

            <button
              className='update-todo btn btn-success pull-right pull-bottom'
              style={ {
                marginRight: 20,
                marginBottom: 10
              } }
              name='button'
              type='submit'
              onClick={ () => this.editDisplay() }
              onChange={ this.onChange }
            >
              Save!
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default TodoItem;
