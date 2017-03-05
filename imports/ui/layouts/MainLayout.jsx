import React from 'react';
import HeaderContainer from '../containers/HeaderContainer.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <HeaderContainer />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
