import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TodoList from './components/todos-list.component';
import EditTodoList from './components/edit-todo.component';
import CreateTodoList from './components/create-todo.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">To Do App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">To Do's</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create To Do's</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TodoList} />
          <Route path="/create" component={CreateTodoList}></Route>
          <Route path="/edit:id" component={EditTodoList}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
