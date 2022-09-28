import React, { useState } from 'react';
import Axios from 'axios';

function Utilities(props) {

  const [name, setName ] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Payment Trxn ${name}`)
  }

  const base_url = "https://api.paylution.com/rest/v3/payments/";
  const pmt_id = "pmt-915bbb1a-8c64-4a06-a45f-7216dca0514a";
  const auth = "Basic cmVzdGFwaXVzZXJANzA2MzUxNzAxNjg3OnhRYzZZeUU5OEpkZUpuOTg=";
  
  var config = {
    method: 'get',
    url: base_url + name,
    headers: { 
      'Authorization': auth
      // 'Cookie': 'JSESSIONIDSSO=9EF21C47325FF816AC84141E4B36461D; TS0154843c=01a23367a7268f0de61ac6d63e48a75e80442d7671ff44608912e0a0723a43df41cc62b6aa36917d5462b8a86db56fb9f47406caaa'
    }
  };
  
  const getUsers = () => {
    Axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
     });
  };

  return (
    <div className="Utilities">
      <h1>Utilities</h1>
      <form onSubmit={handleSubmit}>
      <label>
        PmtId: <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </label>
      <h1><button onClick={ getUsers }> Get Hyper Users</button> </h1>
      </form>
    </div>
  );
}

export default Utilities;