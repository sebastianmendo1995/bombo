import React from "react";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      dob: "",
      email: "",
      result: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    const user = {};
    user['name'] = this.state.name;
    user['surname'] = this.state.surname;
    user['email'] = this.state.email;
    user['dob'] = this.state.dob;
    
    this.setState( {
      result: this.state.result.concat([user])
    })
  }

  render() {
    let users = this.state.result;
    let registrations = '';
    if(users.length > 0){
      registrations = (
        <div className ='users'>
          <ol>
            {
              users.map( (user,idx) => {
                return (
                  <li key={idx}>
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                    <p>{user.email}</p>
                    <p>{user.dob}</p>
                  </li>
                )
              })
            }
          </ol>
        </div>
      )
    }
    return (
      <div className="main">
        <div className="main-content">
          <div className="form-container">
            <h1>Registration Form</h1>
            <form className="main-form">
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput("name")}
                placeholder="Name"
              />
              <br />
              <input
                type="text"
                value={this.state.surname}
                onChange={this.handleInput("surname")}
                placeholder="Surname"
              />
              <br />
              <input
                type="date"
                value={this.state.dob}
                onChange={this.handleInput("dob")}
                placeholder="DOB"
              />
              <br/>
              <button onClick={this.handleSubmit} className='form-sub'>Save Info</button>
            </form>
          </div>
          {registrations}
        </div>
      </div>
    );
  }
}

export default App;

