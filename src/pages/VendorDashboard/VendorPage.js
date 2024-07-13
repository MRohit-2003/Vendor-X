import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './NavBar';
import VendorOverview from './VendorOverview';
import TotalsSection from './TotalsSection';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const VendorPage = () => {
    const [formData, setFormData] = useState({
        coll1: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll2: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll3: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll4: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll5: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll6: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll7: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
    });

    const [freight, setFreight] = useState('');

    const handleInputChange = (updatedFormData) => {
        setFormData(updatedFormData);
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <BreadCrumb />
                </Col>
            </Row>
            <Row>
                <Col>
                    <VendorOverview formData={formData} onInputChange={handleInputChange} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TotalsSection freight={freight} />
                </Col>
            </Row>
        </Container>
    );
};

export default VendorPage;
