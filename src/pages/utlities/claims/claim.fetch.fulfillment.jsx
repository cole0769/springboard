const apiconfig = require('../../../config');

export function getFulfillmentClaim(claimid) {
    fetch(apiconfig + '/claim/getfulfillment/' + claimid, {methid: 'GET'})
        .then(data => data.json())
}