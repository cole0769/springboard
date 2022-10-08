import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './cs.page.styles.scss';
import SiblingClaimTable from '../claims/claim-list/sibling.table.component';
import { getDwData } from '../../../components/fetch-data/data.fetch';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

export default function ClaimSearch() {
    const [isLoading, setLoading] = useState(false);
    const [claim, setClaim] = useState('');
    const [updated, setUpdated] = useState(claim);
    const [siblingdata, setsiblingData] = useState([]);
    // const [parentData, setparentData] = useState([]);
    
    async function fetchSiblings(updated) {
        const result = await getDwData('/claim/getsibling/' + updated);
        setsiblingData(result.data);
        console.log('sibling-result',result)
    };
    
    useEffect(() => {
        if (isLoading) {
            fetchSiblings(updated).then(() => {
            setLoading(false);
            console.log('effect:', isLoading);
          });
        }
      }, [isLoading]);
    
    const handleChange = (event) => {
        setClaim(event.target.value);
    };
    const handleClick = () => {
        setUpdated(claim);
        setLoading(true);
        console.log('Click:', claim);
    }
    return(
        <div className='cs-search-page'>
            <Container fluid="md">
                <Row className='search-string'>
                    <Stack direction='horizontal' gap={3}>
                        <Form.Control className='search-input' placeholder='claim id' onChange={handleChange} value={claim} />
                        <Button 
                            className='search-button-submit' 
                            type="submit"
                            variant="primary" 
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Searching' : 'Submit'}    
                        </Button>
                    </Stack>
                </Row>
                <Row className='gang-parent-details'>
                    <Col className='parent-details' sm={6}></Col>
                    <Col className='dept-details'sm={6}></Col>
                </Row>
                <Row className='sibling-claims-table'>
                    <Col>
                        <SiblingClaimTable claims = {siblingdata} />
                    </Col>
                </Row>
                <Row className='fullfillment-claims-table'>
                    <Col></Col>
                </Row>
            </Container>
        </div>

    );
}

// https://react-bootstrap.netlify.app/layout/grid/
// https://react-bootstrap.netlify.app/components/buttons/#rb-docs-content
// https://codingbeautydev.com/blog/react-get-input-value-on-button-click/