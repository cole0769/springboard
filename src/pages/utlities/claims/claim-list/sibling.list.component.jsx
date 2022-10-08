import React from 'react';

import './sibling.list.styles.scss';

export const SiblingList = props => (
        <div className="container">
            <div className="itemtable">
                <table className="table-latitude">
                    <caption>Total Claims: {props.claim.Siblings}</caption>
                    <thead>
                        <tr>
                            <th scope="col">Parent Claim ID</th>
                            <th scope="col">Claim ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Postmarked</th>
                            <th scope="col">Batched</th>
                            <th scope="col">Processed</th>
                            <th scope="col">Invoiced</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.claim.GangParent}</td>
                            <td>{props.claim.ClaimId}</td>
                            <td>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', useGrouping: false, minimumFractionDigits: 2 }).format(props.claim.RefundAmount)}</td>
                            <td>{props.claim.ClaimStatus}</td>
                            <td>{props.claim.PostmarkDate}</td>
                            <td>{props.claim.BatchImportDate}</td>
                            <td>{props.claim.ProcessedDate}</td>
                            <td>{props.claim.InvoiceDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
);

// http://localhost:3001/api