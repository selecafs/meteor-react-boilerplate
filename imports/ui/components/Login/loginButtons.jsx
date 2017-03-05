import React from 'react';
import { browserHistory } from 'react-router';
import { Modal, Button} from 'react-bootstrap';
import forms from 'newforms';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      error: ''
    };

    // Bind callback methods to make `this` the correct context.
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  handleClick(event) {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    var username = this.refs.username.value,
        password = this.refs.password.value,
        that = this;

      Meteor.loginWithPassword(username, password, function(error) {
          // 3. Handle the response
          if (error) {
              that.setState({ error: error.reason });
              console.log(error.reason);
          } else {
            browserHistory.go('/dashboard');
          }

      });
      return false;
  }

  handleForgotPassword(e) {
    this.close();
    browserHistory.push('/recover');

  }

  render() {

    return (
      <span>
      <button className="login-btn round-btn" id='LoginButtons' onClick={this.handleClick}>LOG IN</button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Welcome back!</h4>
              <form role="form" action="" method="post" className="registration-form">
                  <input ref='username' type="text" label="Username" placeholder="Enter username" />
                  <input ref='password' type="password" label="Password" />

                  <Button type="submit" onClick={this.handleSubmit} >Log In</Button>
                  <a className='forgot-password' onClick={this.handleForgotPassword}>Forgot Password</a>
                  <span ref='error' className="help-inline">{this.state.error}</span>
                </form>
          </Modal.Body>
        </Modal>
      </span>
    );
  }
}
