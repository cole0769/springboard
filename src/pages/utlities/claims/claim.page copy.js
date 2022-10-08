import React, { useState } from 'react'
import { getParentClaim } from './claim.fetch.parent';
import Axios from 'axios';
import './claim.styles.scss'
const apiconfig = require('../../../config');

export default function ClaimPage(props) {
    const [data, setData] = useState("");
    const [name, setName ] = useState("");
    const [hwpmtid, setHwpmtid ] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [claim, setClaim] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Requesting Payment Trxn ${name}`)
    }
    
    // Hyperwallet Call details
    const base_url = "https://api.paylution.com/rest/v3/payments/";
    const pmt_id = "pmt-915bbb1a-8c64-4a06-a45f-7216dca0514a";
    const auth = "Basic cmVzdGFwaXVzZXJANzA2MzUxNzAxNjg3OnhRYzZZeUU5OEpkZUpuOTg=";
    var config = {
        method: 'get',
        url: base_url + hwpmtid,
        headers: { 
        'Authorization': auth
        // 'Cookie': 'JSESSIONIDSSO=9EF21C47325FF816AC84141E4B36461D; TS0154843c=01a23367a7268f0de61ac6d63e48a75e80442d7671ff44608912e0a0723a43df41cc62b6aa36917d5462b8a86db56fb9f47406caaa'
        }
    };
    // Gang Parent Call details
    var gangconfig = {
        method: 'get',
        url: apiconfig + '/claim/getparent/' + claim,
        headers: {}
    };
    const getClaim = () => {
        try {
          const response = getParentClaim(claim);
          const result = response.json();
          setIsLoading(true);
          setData(result);
          setData(result);
        } catch (err) {
          setErr(err.message);
            } finally {
                setIsLoading(false);
            }
      };

    // const handleClick = async () => {
    //     setIsLoading(true);
    //     try {
    //     //   const response = await fetch(apiconfig + '/claim/getparent/' + claimid, {methid: 'GET'})
    //     //   .then(data => data.json());
    //     const response = getParentClaim(claim);

    //     if (!response.ok) {
    //         throw new Error(`Error! status: ${response.status}`);
    //     }

    //     const result = await response.json();

    //     console.log('result is: ', JSON.stringify(result, null, 4));

    //     setData(result);
    //     } catch (err) {
    //     setErr(err.message);
    //     } finally {
    //     setIsLoading(false);
    //     }
    // };

    // console.log(data);

    return (
        <div className='gangParent'>
            {/* <input placeholder="claimid" type="text" id="claimid" name="claimid" autoComplete="off" onChange={e => setClaim(e.target.value)} /> */}
            {/* <button onClick= { () => handleClick() }> Search </button> */}
            <div className="claimDetails">
                <h1>ClaimDetails</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Claim Id: <input placeholder="claim id"type="text" value={claim} onChange={e => setClaim(e.target.value)}/>
                    </label>
                    <h1><button onClick={ getClaim }> Submit </button> </h1>
                </form>
            </div>
            {err && <h2>{err}</h2>}
            {isLoading && <h2>Loading...</h2>}

            {data && (
                <div>
                <h2>Title: {data.Title}</h2>
                <h2>Parent Claim Id: {data.GangParent}</h2>
                <h2>First Name: {data.FirstName}</h2>
                <h2>Last Name: {data.LastName}</h2>
                <h2>Address: {data.Address}</h2>
                <h2>Address 2: {data.Address2}</h2>
                <h2>City: {data.City}</h2>
                <h2>State: {data.State}</h2>
                <h2>Country: {data.Country}</h2>
                <h2>Zip Code: {data.ZipCode}</h2>
                <h2>Email: {data.Email}</h2>
                <h2>Phone: {data.PhoneNumber}</h2>
                <h2>Client: {data.ClientName}</h2>
                <h2>Dept: {data.DeptName}</h2>
                <h2>Dept Long Name: {data.DeptLongName}</h2>
                <h2>Processed Date: {data.ProcessedDate}</h2>
                <h2>Postmark Date: {data.PostmarkDate}</h2>
                <h2>Refund Amount: {data.RefundAmount}</h2>
                <h2>Sum of Refunds: {data.SumRefund}</h2>
                <h2>Claim Status: {data.ClaimStatus}</h2>
                <h2>Fulfillment Type: {data.FulfillmentType}</h2>
                <h2>Batch Import Date: {data.BatchImportDate}</h2>
                <h2>Invoice Number: {data.InvoiceNumber}</h2>
                <h2>Invoice Date: {data.InvoiceDate}</h2>
                <h2>Duplicate ClaimId: {data.DuplicateClaimId}</h2>
                <h2>Original ClaimId: {data.OriginalClaimId}</h2>
                <h2>No. of Siblings: {data.Siblings}</h2>
                </div>
            )}
        </div>
    );
};

