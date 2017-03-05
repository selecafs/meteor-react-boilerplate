import React from 'react';
import classNames from 'classnames';
import {TabContainer, TabContent, Nav, TabPane, Row, Col, NavItem} from 'react-bootstrap';
import Footer from '../components/Footer/Footer.jsx';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className='dashboard'>
          <TabContainer id='dashboard-tabs' activeKey={this.state.key} className='dashboard-nav' onSelect={this.handleSelect} defaultActiveKey={1}>
            <Row className="clearfix">
              <Col md={1}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey={1}>
                    Tab 1
                  </NavItem>
                  <NavItem eventKey={2}>
                    Tab 2
                  </NavItem>
                </Nav>
              </Col>
              <Col md={10}>
                <TabContent animation>
                  <TabPane eventKey={1}>
                    tab content 1
                  </TabPane>
                  <TabPane eventKey={2}>
                    tab content 2
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </div>
        <Footer />
      </div>
    );
  }
}
