import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Container, Row, Input, Label } from 'reactstrap';
import TotalsSection from './TotalsSection'; // Adjust the import path as per your project structure

const VendorOverview = () => {
    const [collapses, setCollapses] = useState({
        coll1: false,
        coll2: false,
        coll3: false,
        coll4: false,
        coll5: false,
        coll6: false,
        coll7: false,
    });

    const [formData, setFormData] = useState({
        coll1: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll2: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll3: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll4: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll5: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll6: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
        coll7: { status: 'Available', rate: '', quantity: '', discount: '', total: '' },
    });

    const [freight, setFreight] = useState(0); // State for freight input

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [totalPriceFreight, setTotalPriceFreight] = useState(0);

    useEffect(() => {
        calculateTotalAmounts();
    }, [formData, freight]); // Update whenever formData or freight changes

    const toggleCollapse = (coll) => {
        setCollapses({ ...collapses, [coll]: !collapses[coll] });
    };

    const calculateTotal = (rate, quantity, discount) => {
        const rateNum = parseFloat(rate) || 0;
        const quantityNum = parseInt(quantity) || 0;
        const discountNum = parseFloat(discount) || 0;
        return (rateNum * quantityNum * (1 - discountNum / 100)).toFixed(2);
    };

    const handleInputChange = (coll, field, value) => {
        const updatedFormData = { ...formData };
        updatedFormData[coll][field] = value;

        if (field === 'status' && value === 'Regret') {
            updatedFormData[coll] = { ...updatedFormData[coll], rate: '', quantity: '', discount: '', total: '' };
        } else {
            const { rate, quantity, discount } = updatedFormData[coll];
            updatedFormData[coll].total = calculateTotal(rate, quantity, discount);
        }

        setFormData(updatedFormData);
    };

    const calculateTotalAmounts = () => {
        let totalAmount = 0;
        let totalDiscount = 0;

        Object.values(formData).forEach(item => {
            if (item.status === 'Available') {
                totalAmount += parseFloat(item.total) || 0;
                totalDiscount += (parseFloat(item.rate) * parseFloat(item.quantity) * parseFloat(item.discount) / 100) || 0;
            }
        });

        setTotalAmount(totalAmount);
        setTotalDiscount(totalDiscount);

        // Calculate totalPriceFreight including freight
        const totalPrice = totalAmount + parseFloat(freight);
        setTotalPriceFreight(totalPrice);
    };

    const renderCardBody = (collKey) => {
        const isDisabled = formData[collKey].status === 'Regret';
        const { rate, quantity, discount, total } = formData[collKey];

        return (
            <CardBody>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between">
                            <div className="form-check form-check-inline">
                                <Input
                                    className="form-check-input"
                                    type="radio"
                                    name={`status${collKey}`}
                                    id={`available${collKey}`}
                                    checked={formData[collKey].status === 'Available'}
                                    onChange={() => handleInputChange(collKey, 'status', 'Available')}
                                />
                                <Label className="form-check-label" htmlFor={`available${collKey}`}>
                                    Available
                                </Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input
                                    className="form-check-input"
                                    type="radio"
                                    name={`status${collKey}`}
                                    id={`regret${collKey}`}
                                    checked={formData[collKey].status === 'Regret'}
                                    onChange={() => handleInputChange(collKey, 'status', 'Regret')}
                                />
                                <Label className="form-check-label" htmlFor={`regret${collKey}`}>
                                    Regret
                                </Label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={6}>
                        <Input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => handleInputChange(collKey, 'quantity', e.target.value)}
                            disabled={isDisabled}
                        />
                    </Col>
                    <Col lg={6}>
                        <Input
                            type="select"
                            className="form-select mb-2"
                            aria-label="Units"
                            disabled={isDisabled}
                        >
                            <option>Units</option>
                            <option value="1">tons</option>
                            <option value="2">kgs</option>
                            <option value="3">meters</option>
                            <option value="3">liters</option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Rate"
                            value={rate}
                            onChange={(e) => handleInputChange(collKey, 'rate', e.target.value)}
                            disabled={isDisabled}
                        />
                    </Col>
                    <Col lg={4}>
                        <Input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Discount (%)"
                            value={discount}
                            onChange={(e) => handleInputChange(collKey, 'discount', e.target.value)}
                            disabled={isDisabled}
                        />
                    </Col>
                    <Col lg={4}>
                        <Input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Total"
                            value={total}
                            disabled
                        />
                    </Col>
                </Row>
            </CardBody>
        );
    };

    const getStatus = (collKey) => {
        const { status, total, quantity } = formData[collKey];
        if (status === 'Regret') return 'Regret';
        if (total && quantity) return `₹${total} @ ${quantity}/PCS`;
        return 'Pending';
    };

    document.title = "Vendor Overview | Velzon - React Admin & Dashboard Template";

    return (
        <Container fluid>
            <Row>
                <Col className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        {/* Add content here if needed */}
                    </div>

                    <Row>
                        <Col xxl={4}>
                            <Card className="border card-border-primary mb-4">
                                <CardHeader onClick={() => toggleCollapse('coll1')} style={{ cursor: 'pointer' }}>
                                    <h6 className="card-title mb-0">Monitor <span className={`badge align-middle fs-10 ${getStatus('coll1') === 'Pending' ? 'bg-warning' : getStatus('coll1') === 'Regret' ? 'bg-danger' : 'bg-success'}`}>{getStatus('coll1')}</span></h6>
                                    <p>Required Quantity: 10</p>
                                </CardHeader>
                                <Collapse isOpen={collapses.coll1}>
                                    {renderCardBody('coll1')}
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="border card-border-success mb-4">
                                <CardHeader onClick={() => toggleCollapse('coll2')} style={{ cursor: 'pointer' }}>
                                    <h6 className="card-title mb-0">KeyBoard <span className={`badge align-middle fs-10 ${getStatus('coll2') === 'Pending' ? 'bg-warning' : getStatus('coll2') === 'Regret' ? 'bg-danger' : 'bg-success'}`}>{getStatus('coll2')}</span></h6>
                                    <p>Required Quantity: 10</p>
                                </CardHeader>
                                <Collapse isOpen={collapses.coll2}>
                                    {renderCardBody('coll2')}
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="border card-border-info mb-4">
                                <CardHeader onClick={() => toggleCollapse('coll3')} style={{ cursor: 'pointer' }}>
                                    <h6 className="card-title mb-0">Printer<span className={`badge align-middle fs-10 ${getStatus('coll3') === 'Pending' ? 'bg-warning' : getStatus('coll3') === 'Regret' ? 'bg-danger' : 'bg-success'}`}>{getStatus('coll3')}</span></h6>
                                    <p>Required Quantity: 10</p>
                                </CardHeader>
                                <Collapse isOpen={collapses.coll3}>
                                    {renderCardBody('coll3')}
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>

                    {/* Render TotalsSection with calculated values */}
                    <TotalsSection
                        totalAmount={totalAmount}
                        totalDiscount={totalDiscount}
                        totalPriceFreight={totalPriceFreight}
                        freight={freight}
                        setFreight={setFreight}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default VendorOverview;
