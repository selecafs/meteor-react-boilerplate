import React from 'react';
import classNames from 'classnames';
import Register from '../components/Register/register.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <div id="frontpage-section" className="front-bg">
        <div className="main-contain">
          <div className="register-btns front-page">
            <Register />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
