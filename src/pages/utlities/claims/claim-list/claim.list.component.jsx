import React from 'react';

import './claim.list.styles.scss';

export const ClaimList = props => (
        <div className="container">
            <div className="item"> 
                <h5>Parent Id: {props.claim.GangParent}     Status: {props.claim.ClaimStatus}</h5>
                <h5>Refund Amout: {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', useGrouping: false, minimumFractionDigits: 2 }).format(props.claim.RefundAmount)} </h5>
                <h5>Claim Type: {props.claim.ClaimType}  </h5>
                <h5><u>Customer</u></h5>
                <address>
                <h5>{props.claim.FirstName} {props.claim.LastName}</h5> 
                <h5>{props.claim.Address}</h5>
                <h5>{props.claim.Address2}</h5>
                <h5>{props.claim.City}, {props.claim.State}     {props.claim.ZipCode} </h5>
                <h5>Email: {props.claim.Email}</h5>
                <h5>Phone: {props.claim.PhoneNumber}</h5>
                </address>
            </div>
            <div className="item-dept">
                <h5> Client: {props.claim.ClientName}</h5>
                <h5> Department: {props.claim.DeptName}</h5>
                <h5> Promotion: {props.claim.DeptLongName}  </h5>
                <h5> Fulfillment: {props.claim.FulfillmentType} </h5>
                <h5> Siblings: {props.claim.Siblings} </h5>
                <h5> Full Refund: {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', useGrouping: false, minimumFractionDigits: 2 }).format(props.claim.SumRefund)} </h5>
            </div>
        </div>
);

