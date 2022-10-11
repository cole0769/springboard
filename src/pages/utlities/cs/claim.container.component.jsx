import React, { useEffect, useState } from 'react'
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardBody, CardGroup , CardTitle, CardText ,CardFooter } from 'reactstrap';
import './claim.container.styles.scss';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     spacing: theme.spacing(2),
//     textAlign: 'left',
//     color: theme.palette.text.secondary,
//   }));

function ParentClaimContainer(claim) {
    const result = Array.isArray(claim.claims); //? siblings.map(element => element + 1) : [];
    const parentData = claim.claims //Object.entries(props.claims);
    const isarraynow = Array.isArray(parentData);
    console.log('test',result ,isarraynow, parentData); 
       
    var parent = parentData.map((parentData => parentData.GangParent))
    var amount = parentData.map((parentData => parentData.RefundAmount))
    var total = parentData.map((parentData => parentData.SumRefund))
    var processed = parentData.map((parentData => parentData.ProcessedDate))
    var postmarked = parentData.map((parentData => parentData.PostmarkDate))
    var duplicate = parentData.map((parentData => parentData.DuplicateClaimId))
    var original = parentData.map((parentData => parentData.OriginalClaimId))
    var claimstatus = parentData.map(parentData => parentData.ClaimStatus)
    var firstname = parentData.map(parentData => parentData.FirstName)
    var lastname = parentData.map((parentData => parentData.LastName))
    var address = parentData.map((parentData => parentData.Address))
    var address_2 = parentData.map((parentData => parentData.Address2))
    var city = parentData.map((parentData => parentData.City))
    var state = parentData.map((parentData => parentData.State))
    var zip = parentData.map((parentData => parentData.ZipCode))
    var country = parentData.map((parentData => parentData.Country))
    var email = parentData.map((parentData => parentData.Email))
    var phone = parentData.map((parentData => parentData.PhoneNumber))
    var client = parentData.map((parentData => parentData.ClientName))
    var dept = parentData.map((parentData => parentData.DeptName))
    var deptname = parentData.map((parentData => parentData.DeptLongName))
    var ftype = parentData.map((parentData => parentData.FulfillmentType))
    var claimcount = parentData.map((parentData => parentData.Siblings + 1))
    
    // var contact1 = firstname + ' ' + lastname + '\n' + address  + '\n' + city + ', ' + state + '     ' + zip + '\n' + country 
    var contact2 = firstname + ' ' + lastname + '\n' + address + '\n' + address_2 + '\n' + city + ', ' + state + '     ' + zip + '\n' + country
    // useEffect(() => {
    //     fetchParent(claimId.claims);
    //     console.log('table',claimId.claims)
    // }, []);
    console.log('total',total)

          
    return (
        <div className='parent-id-card-container'>
                    <Col className='parent-column-1'>
                    <Card className='parent-card-1' >
                        <CardBody>
                            <CardText>
                                <TextField readonly className='parentid' id='parentid' label='parent id' value={parent} size='small' />
                                <TextField readonly className='claimstatus' id='claimstatus' label='status' value={claimstatus} size='small' />
                                <TextField readonly className='claimcount' id='claimcount' label='claims' value={claimcount} size='small' type="number" text-align='right' />
                                <TextField readonly className='refundtotal' id='refundtotal' label='refund total' value={'$'+total} size='small' />
                                <div className='contact'>
                                    <TextField readonly className='name-address' id='name-address' label='contact' value={contact2} multiline='true' size='small' />
                                </div>
                                <div className='phone-email'>
                                    <TextField readonly className='phone' id='phone' label='phone' value={phone} size='small' />
                                    <TextField readonly className='email' id='email' label='email' value={email} size='small' />
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col className='parent-column-2'>
                    <Card className='parent-card-2' >
                        <CardBody>
                            <CardText>
                                
                                <TextField readonly className='originalid' id='originalid' label='original id' value={original} size='small' />
                                <TextField readonly className='duplicateid' id='duplicateid' label='duplicateid id' value={duplicate} size='small' />
                                <TextField readonly className='ftype' id='ftype' label='fulfillment' value={ftype} size='small' />
                                <TextField readonly className='client' id='client' label='client' value={client} size='small' />
                                <TextField readonly className='dept' id='dept' label='dept' value={dept} size='small' />
                                <TextField readonly className='deptname' id='deptname' label='department' value={deptname} size='small' />
                                <TextField readonly className='processeddate' id='processeddate' label='processed' value={processed} size='small' text-align='right' />
                                <TextField readonly className='postmarkdate' id='postmarkdate' label='postmarked' value={postmarked} size='small' text-align='right' />
                                {/* <TextField readonly className='refundtotal' id='refundtotal' label='refund total' value={'$'+total} size='small' />
                                <TextField readonly className='ftype' id='ftype' label='fulfillment' value={ftype} size='small' />
                                <TextField readonly className='client' id='client' label='client' value={client} size='small' />
                                <TextField readonly className='dept' id='dept' label='dept' value={dept} size='small' />
                                <TextField readonly className='deptname' id='deptname' label='department' value={deptname} size='small' /> */}
                            </CardText>
                        </CardBody>
                    </Card>
                    </Col>
        </div>
    );
}

export default ParentClaimContainer;