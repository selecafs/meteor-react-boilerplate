import React from 'react';
import classNames from 'classnames';
import {Modal, Button, Input} from 'react-bootstrap';

export default class Recover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ''
    };

    // Bind callback methods to make `this` the correct context.
    this.recoverPassword = this.recoverPassword.bind(this);
  }

  recoverPassword(e) {
    e.preventDefault();
    var email = this.refs.email.getValue(),
        message;

    if (email) {
      Accounts.forgotPassword({email: email}, function(err){
          if (err)
            Session.set('displayMessage', 'Password Reset Error &amp; Doh')
          else {
            Session.set('displayMessage', 'Email Sent &amp; Please check your email.')
          }
          Session.set('loading', false);
        });
      message = 'Sent a reset password link to ' + email + '.';
    } else {
      message = 'Please enter a valid email address.'
    }
    this.setState({ info: message });
  }

  render() {
    return (
      <div className='recover'>
        <h5>Reset Password</h5>
        <div className="recover-forgot-password">
          <form id="forgot-password" >
            <input ref='email' type="email" label="Email Address" placeholder="Enter email" />
            <Button type="submit" onClick={this.recoverPassword}>Reset</Button>
            <span ref='error' className="help-inline">{this.state.info}</span>
          </form>
        </div>
      </div>
    );
  }
}
