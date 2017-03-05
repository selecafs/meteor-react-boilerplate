import React from 'react';
import { browserHistory } from 'react-router';
import Register from '../Register/register.jsx';
import Login from '../Login/loginButtons.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // Bind callback methods to make `this` the correct context.
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    var that = this;
    Meteor.logout(function(err) {
      browserHistory.push('/');
    });
  }

  render() {
    var currentHeader,
        currentUser = this.props.user.currentUser;

    var logedOut = <span className="register-btns"><Register /><Login /></span>,
        username = this.props.user.currentUser ? 'Howdy! '+this.props.user.currentUser.username : '',
        logedIn = <li><span className='nav-current-user'>{username}</span><span><a href="#" className="logout" onClick={this.handleLogout}>Logout</a></span></li>;

    if(currentUser) {
      currentHeader = logedIn;
    } else {
      currentHeader = logedOut;
    }

    return (
      <div className="header">
        <div className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <span className="title"><a href="/">Meteor react boilerplate</a></span>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/about">About</a></li>
                  { currentHeader }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
