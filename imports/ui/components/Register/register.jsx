import React from 'react';
import { Link, Router, browserHistory } from 'react-router';
import { Modal } from 'react-bootstrap';
import forms from 'newforms';
import BootstrapForm from 'newforms-bootstrap';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    // Bind callback methods to make `this` the correct context.
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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

  sendWelcomeEmail(email) {
    Meteor.call('sendWelcomeEmail', {
      to: email,
      from: 'Meteor react boilerplate <accounts@xxx.com>',
      subject: 'Hello',
      text: 'Hello world'}, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          // success!
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    var that = this;
    var form = this.refs.signupForm.getForm();
    if (form.validate()) {
      Accounts.createUser({
        username: form.data.username,
        email: form.data.email,
        password: form.data.password
      }, function(error) {
          if (error) {
            console.log(error);
            that.setState({ error: error.reason });
          }
          else {
            if(Meteor.user().emails[0]) {
              that.sendWelcomeEmail(Meteor.user().emails[0].address);
            }

            browserHistory.go('/dashboard');
          }
        });
      } else {

      }
    }

    render() {
      var SignupForm = forms.Form.extend({
        username: forms.CharField({maxLength: 50, required: true}),
        email: forms.EmailField({required: true}),
        password: forms.CharField({widget: forms.PasswordInput, required: true}),
        confirmPassword: forms.CharField({widget: forms.PasswordInput, required: true}),
        clean: function() {
          if (this.cleanedData.password && this.cleanedData.confirmPassword &&
              this.cleanedData.password != this.cleanedData.confirmPassword) {
            throw forms.ValidationError('Passwords do not match.')
          }
        }
      });

      return (
        <span>
          <button id="register-btn" className="signup-btn round-btn" onClick={this.handleClick}>Get Started</button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={this.handleSubmit}>
                <forms.RenderForm form={SignupForm} ref="signupForm">
                  <BootstrapForm form={SignupForm} />
                  </forms.RenderForm>
                  <button className="btn btn-default">Sign Up</button>
                 <span ref='error' className="help-inline">{this.state.error}</span>
              </form>
            </Modal.Body>
          </Modal>
        </span>
      );
    }
}
