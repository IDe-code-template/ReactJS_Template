import React, { Component } from 'react';
import '../user/user.css';

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/user/test', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(user =>
        this.setState({ user }, () => console.log('user fetched...', user))
      );
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.user.map(user => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
