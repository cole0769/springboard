import React from 'react';
import Axios from 'axios';
import './homepage.styles.scss';

function Homepage() {

  var config = {
    method: 'get',
    url: 'https://api.paylution.com/rest/v3/users?limit=100&offset=0',
    headers: { 
      'Authorization': 'Basic cmVzdGFwaXVzZXJANzA2MzUxNzAxNjg3OnhRYzZZeUU5OEpkZUpuOTg=' 
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
    <div className="Homepage">
      <h1>Hello <button onClick={ getUsers }> Get Hyper Users</button> </h1>
    </div>
  );
}

export default Homepage;
