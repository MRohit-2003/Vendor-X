import React, { useState } from 'react';
import { Col, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('1'); // State to manage active tab

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <Col xxl={6}>
            <Card>
                <CardBody>
                    <Nav pills className="nav-justified mb-3">
                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={activeTab === '1' ? 'active' : ''}
                                onClick={() => toggleTab('1')}
                            >
                                Quotations
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={activeTab === '2' ? 'active' : ''}
                                onClick={() => toggleTab('2')}
                            >
                               Ledgers
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={activeTab === '3' ? 'active' : ''}
                                onClick={() => toggleTab('3')}
                            >
                                Billings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={activeTab === '4' ? 'active' : ''}
                                onClick={() => toggleTab('4')}
                            >
                                Settings
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardBody>
            </Card>
        </Col>
    );
};

export default NavBar;
