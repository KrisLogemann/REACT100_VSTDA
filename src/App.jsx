/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import Todos from './components/Todos';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      title: '',
      priority: '',
      toggleDisplay: false
    };
    this.markComplete = this.markComplete.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.editDisplay = this.editDisplay.bind(this);
  }
  onChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    } else if (e.target.name === 'priority') {
      this.setState({ priority: e.target.value });
    }
    // this.setState({ title: e.target.value });
    // this.setState({ priority: e.target.value });
  }
  // Submit Todo
  onSubmit(e) {
    e.preventDefault();
    this.addTodo(this.state.title);
    this.setState({ title: '', priority: '' });
  }
  // Delete Todo
  delTodo(id) {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // Toggle complete
  markComplete(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  // Add New Todo
  addTodo(title) {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
      priority: this.state.priority
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  // Edit Todo
  editTodo(title, priority, id) {
    let copyTodos = this.state.todos;
    for (let i = 0; i < copyTodos.length; i++) {
      console.log(id, ' ', copyTodos[i].id )
      if (copyTodos[i].id == id) {
        copyTodos[i].title = title;
        copyTodos[i].priority = priority;
        console.log('found item')
      }
    }
    this.setState({ todos: copyTodos })
    console.log('editing todos', copyTodos);
  }

  render() {
    return (
      <div onSubmit={ this.onSubmit } className='App'>
        <div className='container'>
          <div className='page-header'>
            <h1 className='text-white'>Very Simple Todo App</h1>
            <p className='lead'>Track all of the things</p>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='panel panel-default'>
                <div className='panel-heading'>Add New Todo:</div>
                <div className='panel-body'>
                  <div className='form-group'>
                    <div className='form-group'>
                      <label htmlFor='exampleFormControlTextarea1'>
                        I want to...
                      </label>
                      <textarea
                        name='title'
                        className='form-control rounded-0 create-todo-text'
                        id='exampleFormControlTextarea1'
                        rows='5'
                        value={ this.state.title }
                        onChange={ this.onChange }
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='inputState'>
                      How much of a priority is this?
                    </label>
                    <select
                      name='priority'
                      id='inputState'
                      className='form-control create-todo-priority'
                      onChange={ this.onChange }
                      value={ this.state.priority }
                    >
                      <option selected>Select a Priority</option>
                      <option value='1'>Low</option>
                      <option value='2'>Medium</option>
                      <option value='3'>High</option>
                    </select>
                  </div>
                </div>
                <div className='panel-footer'>
                  <button
                    onClick={ this.onSubmit }
                    name='button'
                    className='btn btn-primary btn-lg btn-block create-todo'
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-8 results-wrapper'>
              <div className='panel panel-default'>
                <div className='panel-heading'>View Todos</div>
                <Todos
                  todos={ this.state.todos }
                  markComplete={ this.markComplete }
                  delTodo={ this.delTodo }
                  editTodo={ this.editTodo }
                  editDisplay={ this.editDisplay }
                  toggleDisplay={ this.toggleDisplay }
                  priority={ this.state.priority }
                />
                <div className='panel-body'>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
