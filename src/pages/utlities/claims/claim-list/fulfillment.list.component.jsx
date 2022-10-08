import React from 'react';

import './fulfillment.list.styles.scss';

export const FulfillmentList = props => (
        <div className="container">
            <div className="itemtable">
                <table className="table-latitude">
                    <caption>Fulfillments</caption>
                    <thead>
                        <tr>
                            <th scope="col">Parent Claim ID</th>
                            <th scope="col">Siblings</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Sent To Fulfiller</th>
                            <th scope="col">Payment Number</th>
                            <th scope="col">Print Session</th>
                            <th scope="col">Check Printed</th>
                            <th scope="col">Check Cleared</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Batch File</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.claim.GangParent}</td>
                            <td>{props.claim.Siblings}</td>
                            <td>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', useGrouping: false, minimumFractionDigits: 2 }).format(props.claim.RefundAmount)}</td>
                            <td>{props.claim.FulfillmentStatus}</td>
                            <td>{props.claim.FulfillmentStatusReason}</td>
                            <td>{props.claim.SentToFulfiller}</td>
                            <td>{props.claim.PaymentNumber}</td>
                            <td>{props.claim.PrintSessionId}</td>
                            <td>{props.claim.CheckPrintedDate}</td>
                            <td>{props.claim.CheckClearedDate}</td>
                            <td>{props.claim.FulfillmentVendorComments}</td>
                            <td>{props.claim.FulfillerBatchFile}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
);

// http://localhost:3001/api