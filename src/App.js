import React, { Component } from 'react';
import logo from './logo.svg';
import {todos} from './todos'
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos:todos
    }
  }

  priority_color(priority) {
    switch (priority) {
      case "high":
        return "danger"
        break;
      case "medium":
        return "warning"
        break;
      case "low":
        return "success"
        break;
    
      default:
        break;
    }
  }

  render() {

    const todos = this.state.todos.map((todo,i)=> {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
            <h3>{todo.title}</h3>
            <span className={"badge badge-pill badge-"+this.priority_color(todo.priority)+" ml-2"}>
              {todo.priority}
            </span>
            </div>
            <div className="card-body">
            <p>{todo.description}</p>
            <p className="text-muted">{todo.responsible}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
      {/* Navegador */}
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Tareas <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span><span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row mt-4">
              {todos} 
            </div>
          </div>

      </div>
    );
  }
}

export default App;
