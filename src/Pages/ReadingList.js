import React from "react";
import {Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';

import reading from '../information/reading-list.json';
import PhilosophyBooks from "../components/PhilosophyBooks";
import FictionBooks from "../components/FictionBooks";
import TrueCrimeBooks from "../components/TrueCrimeBooks";
import MathBooks from "../components/MathBooks";

class ReadingList extends React.Component {

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
            <h1 className="display-3">{reading.title}</h1>
            <p className="lead">{reading.summary}</p>
            </Container>

            <Container>
                <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                    Philosophy
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                    Mathematics
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}>
                    Fiction
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}>
                    True Crime
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                <PhilosophyBooks/>
                </TabPane>
                <TabPane tabId="2">
                <MathBooks/>
                </TabPane>
                <TabPane tabId="3">
                <FictionBooks/>
                </TabPane>
                <TabPane tabId="4">
                <TrueCrimeBooks/>
                </TabPane>
                </TabContent>
            </Container>
        </div>;
    }
}

export default ReadingList;