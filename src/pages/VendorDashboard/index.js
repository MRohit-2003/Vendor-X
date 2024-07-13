import React from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import VendorOverview from './VendorOverview';
//import TotalsSection from './TotalsSection'; // Adjust the path as per your project structure
import TermsConditions from './TermsConditions';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const ERPDashboard = () => {
    document.title = "Infinit X | ERP";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Vendor Entry " pageTitle="Vendor X" />
                    <NavBar/>
                    <VendorOverview />
                 
                    <TermsConditions/>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ERPDashboard;
