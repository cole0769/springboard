const apiconfig = require('../../../config');

export function getHyperwalletPayment(paymentId) {
    const base_url = "https://api.paylution.com/rest/v3/payments/";
    const pmt_id = "pmt-915bbb1a-8c64-4a06-a45f-7216dca0514a";
    const auth = "Basic cmVzdGFwaXVzZXJANzA2MzUxNzAxNjg3OnhRYzZZeUU5OEpkZUpuOTg=";
  
    var config = {
        method: 'get',
        url: base_url + paymentId,
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

    fetch(apiconfig + '/claim/getparent/' + claimid, {methid: 'GET'})
        .then(data => data.json())
}