import React from 'react';
import { Col, Input, Label, Row, Button } from 'reactstrap';

const TotalsSection = ({ totalAmount, totalDiscount, totalPriceFreight, freight, setFreight }) => {
    const handleFreightChange = (e) => {
        setFreight(parseFloat(e.target.value) || 0);
    };

    return (
        <>
            <Row className="mb-3">
                <Col>
                    <h5>Quotation/23-24/RFP/0010</h5>
                </Col>
                <Col className="text-end">
                    <Button color="success" className="w-lg">{totalAmount} ₹</Button> {/* Display totalAmount dynamically */}
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xxl={3} md={6}>
                    <div>
                        <Label htmlFor="readonlyInput1" className="form-label">Total Amount (₹)</Label>
                        <Input type="text" className="form-control" id="readonlyInput1" value={totalAmount} readOnly />
                    </div>
                </Col>
                <Col xxl={3} md={6}>
                    <div>
                        <Label htmlFor="freightInput" className="form-label">Freight</Label>
                        <Input
                            type="text"
                            className="form-control"
                            id="freightInput"
                            placeholder="Freight"
                            value={freight}
                            onChange={handleFreightChange}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} md={6}>
                    <div>
                        <Label htmlFor="readonlyInput3" className="form-label">Total Discount (₹)</Label>
                        <Input type="text" className="form-control" id="readonlyInput3" value={totalDiscount} readOnly />
                    </div>
                </Col>
                <Col xxl={3} md={6}>
                    <div>
                        <Label htmlFor="readonlyInput4" className="form-label">Total Price (Amount+Freight) (₹)</Label>
                        <Input type="text" className="form-control" id="readonlyInput4" value={totalPriceFreight} readOnly />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TotalsSection;
