const apiconfig = require('../../../config');

export function getParentClaim(claimid) {
    const results = fetch(apiconfig + '/claim/getparent/' + claimid, {methid: 'GET'});
    const json = results.json();
    return json;
        // .then(data => data.json());
    console.log(results)

}