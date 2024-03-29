import React from 'react';
import {Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Education from './Education'
import profile from '../information/profile.json'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return <div>
        <Container>
          <h1 className="display-3">{profile.title}</h1>
          <p className="lead">{profile.summary}</p>
        </Container>

      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}>
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}>
              Education
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Education/>
          </TabPane>
        </TabContent>
      </Container>
      <Container>
        <h1>
          {/* Implement 6 latest instagram post (Implemt one post first for sake of understanding) */}
        </h1>
      </Container>
    </div>;
  }
}

export default Profile;