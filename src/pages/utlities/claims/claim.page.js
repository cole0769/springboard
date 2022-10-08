import React, { useState } from 'react';
// import Axios from 'axios';
import ParentClaimContainer from './claim-list/claim.container.component';
import SiblingClaimTable from './claim-list/sibling.table.component';
// import { ClaimList } from './claim-list/claim.list.component';

function ClaimPage() {

  const [claimid, setClaimId ] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    BuildClaimPage(claimid);
  }

  // const base_url = "http://localhost:3001/api/claim/getparent/";
  // const pmt_id = "pmt-915bbb1a-8c64-4a06-a45f-7216dca0514a";
  // const auth = "";
  
  // var config = {
  //   method: 'get',
  //   url: base_url + name,
  //   headers: { 
  //     'Authorization': auth
  //     // 'Cookie': 'JSESSIONIDSSO=9EF21C47325FF816AC84141E4B36461D; TS0154843c=01a23367a7268f0de61ac6d63e48a75e80442d7671ff44608912e0a0723a43df41cc62b6aa36917d5462b8a86db56fb9f47406caaa'
  //   }
  // };
  
  function BuildClaimPage(claimid) {
    // GetClaimSection(claimid);
    // getSiblingData(claimid);
    console.log('buildpage',claimid)
  };

  function GetClaimSection(claim) {
      return(
     <ParentClaimContainer claims = {claimid} />
    )
  };
  // function GetSiblingData(claimid) {
  //   SiblingClaimTable(claimid)
  // };


  return (
    <div className="Claims">
        <h1>Claims</h1>
        <form onSubmit={handleSubmit}>
        <label>
            <input placeholder="claim id" type="text" value={claimid} onChange={e => setClaimId(e.target.value)}/>
        </label>
        <h1><button onClick={ BuildClaimPage }> Submit </button> </h1>
        </form>
        <GetClaimSection claims = {claimid} />
        {/* <GetClaimSection /> */}
        {/* <getSiblingData /> */}
    </div>
  );
}

export default ClaimPage;