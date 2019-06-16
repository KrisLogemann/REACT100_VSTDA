/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return <TodoItem key={ todo.id } todo={ todo }
            markComplete={ this.props.markComplete }
            delTodo={ this.props.delTodo }
            editTodo={ this.props.editTodo } 
            priority={ todo.priority }
            editDisplay={ this.props.editDisplay } />
        })}
      </div>
    );
  }
}


export default Todos;
