import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, Row, Container, Input } from 'reactstrap';

const TermsConditions = () => {
    const [modalScroll, setModalScroll] = useState(false);

    const toggleScrollModal = () => {
        setModalScroll(!modalScroll);
    };

    return (
        <Container className="my-4"> {/* Adding margin top and bottom */}
            <Row>
                <Col xxl={3} md={6} className="order-md-2">
                    <div>
                        <Label htmlFor="exampleFormControlTextarea5" className="form-label">Notes</Label>
                        <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                    </div>
                </Col>
                <Col xxl={3} md={6} className="d-flex flex-column align-items-start order-md-1">
                    <Button color="primary" onClick={toggleScrollModal}>Terms and Conditions</Button>
                    <div className="form-check form-switch form-switch-secondary mt-3">
                        <Input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck2" defaultChecked />
                        <Label className="form-check-label" htmlFor="SwitchCheck2">I agree to the Terms and Conditions</Label>
                    </div>
                </Col>
            </Row>

            <Modal
                isOpen={modalScroll}
                toggle={toggleScrollModal}
                scrollable={true}
                id="exampleModalScrollable"
            >
                <ModalHeader toggle={toggleScrollModal}>Terms and Conditions</ModalHeader>
                <ModalBody>
                <p>
              Price Basis: Based on competitive market rates
            </p>
            <p>
              Personal Terms: Payment within 30 days of invoice date
            </p>
            <p>
              Delivery: Delivery within 7 working days after order confirmation
            </p>
            <p>
              Warranty: 1-year manufacturer's warranty
            </p>
            <p>
             GST: GST applicable as per government regulations
            </p>
            <p>
             Validity:Offer valid till June 30, 2024
            </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleScrollModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default TermsConditions;
