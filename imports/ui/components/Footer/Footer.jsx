import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <div className="footer">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <span className="copyright">© 2017 meteor react boilerplate</span>
              <ul className="nav navbar-nav navbar-right">
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
